# Frenching: instruções para o Claude

## Versionamento (pedido do usuário em 06/11/2026)

O Claude cuida da versão do app. **Todo commit sobe a versão** em `package.json` e `package-lock.json`. Use o comando abaixo, sem criar tag:

```bash
npm version <nova-versão> --no-git-tag-version
```

A versão aparece em Configurações → Sobre e é a que a atualização automática compara.

| Tipo de mudança | Sobe | Exemplo |
|---|---|---|
| Pequena correção, ajuste de estilo ou de texto, mudança de ordem de coisas pouco importantes, conteúdo novo (páginas de estudo, cartões, questões) | `x.y.Z` (patch) | 1.1.0 → 1.1.1 |
| Funcionalidade nova ou diferente, aba nova desenvolvida | `x.Y.0` (minor, zera o patch) | 1.1.3 → 1.2.0 |
| Mudança muito grande na interface (só com o usuário pedindo) | `X.0.0` (major) | 1.4.2 → 2.0.0 |

- Um commit com várias mudanças sobe pelo tipo mais alto entre elas.
- Cite a versão nova na mensagem do commit (ex.: "1.1.1: ...").
- Subir a versão não publica nada. Gerar o instalador, criar o Release no GitHub e fazer o push continuam com o usuário (ver README → Releases).
