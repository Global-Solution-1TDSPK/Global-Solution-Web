import "./login.scss";
import fotoLogin from "../../../public/FotoLogin.svg";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main className="separador">
      <div className="cor-fundo-formulario">
        <div className="posicao-central">
          <h2>Login</h2>
          <div className="formulario-login">
            <input type="text" placeholder="Digite seu usuário..." />
            <input type="password" placeholder="Digite sua senha..." />
          </div>
          <Link href="/conteudoHome">
          <button>Entrar</button>
          </Link>
          <div className="linha"></div>
          <p>
            Ainda não tem uma conta?
            <Link href="/cadastrar"> 
            <span className="cor-cadastro"> cadastre-se :)</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="fundo-login">
        <Image src={fotoLogin} width={700} quality={100} />
      </div>
    </main>
  );
}
