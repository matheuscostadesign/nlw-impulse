<img src=".github/nlw-heat.png">

# Stage 1 – Back-end

Aula 01: #RumoAoPróximoNível

- Criação do backend da aplicação utlizando NodeJS;
- Typescript para aumento da produtividade em desenvolvimento;
- Prisma ORM, para trabalhar com banco de dados;
- Socket.IO para trabalhar comunicação em tempo real;

### Baixar dependencias (node_modules)

```bash
npm install
yarn
```

### Instalação do YARN

```bash
npm install --global yarn
```

### Iniciar projeto com YARN

```bash
## Executar YARN pelo Git Bash
yarn init -y
```

### Iniciar ambiente de desenvolvimento

```bash
yarn dev
```

### Dependencias

```bash
## Express
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

```bash
yarn prisma migrate dev
yarn add @prisma/client
yarn prisma studio
```

```bash
yarn add socket.io
yarn add @types/socket.io -D
yarn add cors
yarn add @types/cors -D
```

# Stage 2 – Front-end

Aula 02:

- Criação do front-end web da aplicação utilizando ReactJS.
- Implementação do Vite (https://vitejs.dev/), uma ferramenta extremamente performática
- Implementação do TypeScript e CSS modules.
- Interface da aplicação do zero com Flexbox e Grid System
- Animações com Framer Motion.

### Dependencias

```bash
## Instalação do Vite
npm init vite@latest web --template react-ts
yarn create vite web --template react-ts
```
