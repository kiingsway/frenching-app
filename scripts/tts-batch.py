# Gera vários áudios de uma vez com o edge-tts, num único processo Python.
#
# Usado por scripts/generate-audio.mts. Lê da entrada padrão um JSON:
#   { "rate": "-24%", "jobs": 5, "items": [{ "key", "text", "voice", "out" }, ...] }
# e escreve na saída padrão uma linha JSON por evento, na ordem em que acontecem:
#   { "event": "start", "key": ... }
#   { "event": "done", "key": ..., "error": null | "mensagem" }
#
# Mais rápido que chamar o edge-tts um arquivo por vez: o Python abre uma vez só e
# até `jobs` áudios são pedidos ao serviço ao mesmo tempo (o tempo gasto é quase
# todo esperando a rede). Cada áudio é gravado num .part e só vira .mp3 quando
# termina, para nunca sobrar um arquivo pela metade.
#
# O SSML declara o idioma da própria voz, fr-FR ou fr-CA (o edge-tts declara sempre
# en-US, e assim a voz multilíngue lê alguns textos curtos em inglês).

import asyncio
import json
import os
import re
import sys

import edge_tts
import edge_tts.communicate as communicate


def mkssml(tc, escaped_text):
    if isinstance(escaped_text, bytes):
        escaped_text = escaped_text.decode("utf-8")
    # O edge-tts guarda a voz como "Microsoft Server Speech ... (fr-CA, SylvieNeural)"
    match = re.search(r"\b(fr-[A-Z]{2})\b", tc.voice)
    lang = match.group(1) if match else "fr-FR"
    return (
        f"<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='{lang}'>"
        f"<voice name='{tc.voice}'>"
        f"<prosody pitch='{tc.pitch}' rate='{tc.rate}' volume='{tc.volume}'>"
        f"{escaped_text}"
        "</prosody>"
        "</voice>"
        "</speak>"
    )


communicate.mkssml = mkssml

ATTEMPTS = 3


def emit(event):
    sys.stdout.write(json.dumps(event, ensure_ascii=False) + "\n")
    sys.stdout.flush()


async def generate(item, rate, limit):
    async with limit:
        emit({"event": "start", "key": item["key"]})
        part = item["out"] + ".part"
        error = None
        for attempt in range(ATTEMPTS):
            try:
                await edge_tts.Communicate(item["text"], item["voice"], rate=rate).save(part)
                os.replace(part, item["out"])
                error = None
                break
            except Exception as e:  # noqa: BLE001 — qualquer falha vira erro daquele áudio
                error = f"{type(e).__name__}: {e}"
                if os.path.exists(part):
                    os.remove(part)
                # Espera um pouco mais a cada tentativa (o serviço pode estar limitando)
                await asyncio.sleep(1.5 * (attempt + 1))
        emit({"event": "done", "key": item["key"], "error": error})


async def main():
    request = json.loads(sys.stdin.buffer.read().decode("utf-8"))
    limit = asyncio.Semaphore(max(1, int(request.get("jobs", 5))))
    await asyncio.gather(*(generate(item, request["rate"], limit) for item in request["items"]))


if __name__ == "__main__":
    # A saída vai em UTF-8 (o console do Windows usaria outra codificação)
    sys.stdout.reconfigure(encoding="utf-8")
    asyncio.run(main())
