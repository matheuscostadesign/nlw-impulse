import axios from "axios";

// Regra de negócio
/**
 * Receber code via string
 * Recuperar o access_token no Github
 * Verificar se o usuário existe no banco de dados
 * --- SIM = Gera um token
 * --- NAO = Cria no banco e gera um token
 * Retornar o token com as informações do usuário logado
 */

class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";

    const response = await axios.post(url,null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        "Accept": "application/json"
      }
    })

    return response.data;

  }
}

export { AuthenticateUserService }