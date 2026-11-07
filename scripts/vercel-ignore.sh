#!/bin/bash
# "Ignored Build Step" da Vercel (ignoreCommand no vercel.json).
# A Vercel só entende dois códigos de saída: 0 pula o build e 1 faz o build.
# Qualquer outro (o 128 de um erro do git, por exemplo) faz o deploy falhar.
# Por isso todo caso duvidoso termina em "exit 1" (faz o build).

# Arquivos que entram no site. Se nenhum mudou, o envio mexeu só no app desktop
WEB_PATHS="src/renderer src/web public-web vite.web.config.ts vercel.json package.json package-lock.json tsconfig.json tsconfig.web.json"

# Commit do último deploy que deu certo nesta branch (a Vercel preenche)
PREV="$VERCEL_GIT_PREVIOUS_SHA"

if [ -z "$PREV" ]; then
  echo "Sem deploy anterior para comparar: faz o build"
  exit 1
fi

# A Vercel clona só os últimos commits. Se o do deploy anterior ficou de fora
# (um push com muitos commits), não dá para comparar: faz o build
if ! git cat-file -e "${PREV}^{commit}" 2>/dev/null; then
  echo "Commit $PREV fora do clone: faz o build"
  exit 1
fi

# shellcheck disable=SC2086 # WEB_PATHS é uma lista de caminhos separados por espaço
if git diff --quiet "$PREV" HEAD -- $WEB_PATHS; then
  echo "Nada do site mudou desde $PREV: build pulado"
  exit 0
fi

echo "O site mudou desde $PREV: faz o build"
exit 1
