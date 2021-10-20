- JetBrains Mono
- https://www.jetbrains.com/lp/mono/
- Tema Omni
- Plugin EmojiSense

## Configuração VSCode

```json
 // Configurações da fonte JetBrains Mono
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontLigatures": true,

  // Demais configurações
  "workbench.colorTheme": "Omni",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.startupEditor": "newUntitledFile",

  "explorer.compactFolders": false,
  "editor.renderLineHighlight": "gutter",
  "workbench.editor.labelFormat": "short",
  "extensions.ignoreRecommendations": true,

  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "never",

  "breadcrumbs.enabled": true,
  "editor.parameterHints.enabled": false,
	"editor.formatOnSave": true,
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,

  "emmet.syntaxProfiles": { "javascript": "jsx" },
  "emmet.includeLanguages": { "javascript": "javascriptreact" },

  "javascript.suggest.autoImports": true,
  "typescript.suggest.autoImports": true,
    "emojisense.languages": {
    "markdown": true,
    "html": true,
    "javascript": true,
    "typescript": true,
    "plaintext": true,
    "json": true,
    "scminput": true
}
```

### Baixar dependencias (node_modules)

```bash
npm install
```

## Instalação do YARN

```bash
npm install --global yarn
```

## Iniciar projeto com YARN

```bash
## Executar YARN pelo Git Bash
yarn init -y
```

## Iniciar ambiente de desenvolvimento

```bash
yarn dev
```

## Dependencias

```bash
yarn add express
```

```bash
## Auto-reload na aplicação
yarn add -D @types/express typescript ts-node-dev
```

```bash
yarn tsc --init
```

```bash
## Adicionando Prisma (Comunicação DB)
yarn add prisma -D
yarn prisma init
```

```bash
## Dependencia "dotenv" (Variaveis na url)
yarn add dotenv
```

```bash
yarn add axios
yarn add @types/axios -D
```

```bash
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D
```
