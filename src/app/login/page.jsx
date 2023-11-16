import "./login.scss";
import fotoLogin from "../../../public/FotoLogin.svg";
import Image from "next/image";

export default function Login() {
  return (
    <main className="separador">
      <div className="cor-fundo-formulario">
        <div className="posicao-central">
          <h2>Login</h2>
          <div className="formulario-login">
            <input type="text" placeholder="Digite seu nome..." />
            <input type="text" placeholder="Digite seu usuário..." />
            <input type="password" placeholder="Digite sua senha..." />
          </div>
          <button>Entrar</button>
          <div className="linha"></div>
          <p>
            {" "}
            Ainda não tem uma conta?{" "}
            <span className="cor-cadastro">cadastre-se :)</span>
          </p>
        </div>
      </div>
      <div className="fundo-login">
        <Image src={fotoLogin} width={700} quality={100} />
      </div>
    </main>
  );
}
