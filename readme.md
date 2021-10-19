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

! Executar YARN pelo Git Bash!

## Iniciar projeto com YARN

```bash
yarn init -y
```

```bash
yarn add express
```

```bash
// Auto-reload na aplicação
yarn add -D @types/express typescript ts-node-dev
```

```bash
yarn tsc --init
```

## Iniciar ambiente de desenvolvimento

```bash
yarn dev
```

## Adicionando Prisma (Banco de Dados)

```bash
yarn add prisma -D
```

```bash
yarn prisma init
```

## Dependencia "dotenv" (Variavel na url)

```bash
yarn add dotenv
```
