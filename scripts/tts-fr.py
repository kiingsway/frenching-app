# Roda o edge-tts (mesmos argumentos de `python -m edge_tts`) forçando o francês.
#
# O edge-tts monta o SSML sempre com xml:lang='en-US'. Com uma voz multilíngue
# (como a Vivienne), a voz tenta adivinhar o idioma do texto, e textos curtos ou
# com siglas/nomes ("TEF Canada", "CRS", "Express Entry") acabam lidos em inglês.
# Aqui o SSML declara fr-FR e envolve o texto em <lang xml:lang='fr-FR'>, o que
# fixa o idioma da leitura.

import runpy

import edge_tts.communicate as communicate


def mkssml(tc, escaped_text):
    if isinstance(escaped_text, bytes):
        escaped_text = escaped_text.decode("utf-8")
    return (
        "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='fr-FR'>"
        f"<voice name='{tc.voice}'>"
        f"<prosody pitch='{tc.pitch}' rate='{tc.rate}' volume='{tc.volume}'>"
        f"{escaped_text}"
        "</prosody>"
        "</voice>"
        "</speak>"
    )


communicate.mkssml = mkssml
runpy.run_module("edge_tts", run_name="__main__", alter_sys=True)
