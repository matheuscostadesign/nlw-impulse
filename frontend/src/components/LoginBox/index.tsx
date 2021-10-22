import { useEffect } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { api } from "../../services/api";
import styles from "./styles.module.scss"

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

export function LoginBox() {

  const sigInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=d4dc054e622c3c562865`;

  async function signIn(githubCode: string) {
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode,
    })

    const { token, user } = response.data;

    localStorage.setItem('@dowhile:token', token)

    console.log(user)

  }

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code');

    if (hasGithubCode) {
      const [urlWithoutCode, githuCode] = url.split('?code=')
      
      // Removendo o código retornado do Github na URL
      window.history.pushState({}, '', urlWithoutCode);

      signIn(githuCode)

    }
  }, [])

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={sigInUrl} className={styles.signInWithGithub}>

        <VscGithubInverted size="24" /> 
        Entrar com Github
      </a>
    </div>
  )
}