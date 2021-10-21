import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";

import { Server } from "socket.io";
import { router } from "./routes";

const app = express();

app.use(cors())

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: "*"
  }
});

io.on("connection", socket => {
  console.log(`Usuário conectado no socket ${socket.id}`);
});

app.use(express.json());
app.use(router);

// Rota github (localhost:4000/github)
app.get("/github", (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`) // vai no github e faz a autenticação
})

// Rota de callback (localhost:4000/signin/callback)
app.get("/signin/callback", (request, response) => {
  const { code } = request.query;
  return response.json(code); // exibe o código de retorno do github
})

export { serverHttp, io };