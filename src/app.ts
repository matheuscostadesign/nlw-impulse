import "dotenv/config";
import express, { request } from "express";

const app = express();

// Rota github (localhost:4000/github)
app.get("/github", (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`) // vai no github e faz a autenticação
})

// Rota de callback (localhost:4000/signin/callback)
app.get("/signin/callback", (request, response) => {
  const { code } = request.query;
  return response.json(code); // exibe o código de retorno do github
})

// Inicia o servidor na porta 4000
app.listen(4000, () => console.log(`🚀 Servidor rodando na porta 4000`))