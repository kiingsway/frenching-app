# Caixa de entrada de revisões

Coloque aqui o `.json` que a outra IA devolveu ao revisar uma página que **já existe** (pedido copiado pelo
botão "Copiar pedido de revisão" do menu "⋯" da página; modelo em
[docs/pedidos-para-outras-ias.md](../docs/pedidos-para-outras-ias.md)). Dê ao arquivo o **id da página**,
por exemplo `co-dialogos.json`. Páginas novas continuam indo para [content-inbox](../content-inbox/LEIA-ME.md).

Depois, em qualquer sessão do Claude, diga: **"aplicar a próxima revisão"**.

O Claude pega o arquivo mais antigo, confere por amostragem se as frases citadas estão nas fontes, aplica na
página (mantendo `audio` e o estilo do projeto), roda o `typecheck`, anota em `src/renderer/src/data/revisoes.ts`
e move o JSON para `feitos/`. Os arquivos desta pasta não vão para o Git.
