<img src=".github/nlw-heat.png">

# Stage 1 – Back-end

- Criação do backend da aplicação utlizando NodeJS;
- Typescript para aumento da produtividade em desenvolvimento;
- Prisma ORM, para trabalhar com banco de dados;
- Socket.IO para trabalhar comunicação em tempo real;

### Baixar dependencias (node_modules)

```bash
npm install
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
