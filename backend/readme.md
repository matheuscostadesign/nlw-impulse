<img src="../.github/nlw-heat.png">

# Stage 1 – Back-end

Aula 01: #RumoAoPróximoNível

- Criação do backend da aplicação utlizando NodeJS;
- Typescript para aumento da produtividade em desenvolvimento;
- Prisma ORM, para trabalhar com banco de dados;
- Socket.IO para trabalhar comunicação em tempo real;

### Configurações do YARN

```bash
## Instalação
npm install --global yarn

## Iniciar projeto (Executar YARN pelo Git Bash)
yarn init -y

## Iniciar ambiente de desenvolvimento
yarn dev

## Baixar dependencias
yarn
npm install #cria a pasta node_modules
```

### Dependencias

```bash
## Node Express
yarn add express

## Auto-reload na aplicação
yarn add -D @types/express typescript ts-node-dev

## Typescript
yarn tsc --init

## Prisma (Database Connection)
yarn add prisma -D
yarn prisma init

## Dotenv (Variaveis na url)
yarn add dotenv

## Axios
yarn add axios
yarn add @types/axios -D

## JSON Web Token
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D

## Prisma Migrate (Criar tabelas)
yarn prisma migrate dev
yarn add @prisma/client

## Executar Interface Prisma
yarn prisma studio

## Socket.io
yarn add socket.io
yarn add @types/socket.io -D

## Cors
yarn add cors
yarn add @types/cors -D
```
