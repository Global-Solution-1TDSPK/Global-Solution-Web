import "./login.scss";
import fotoLogin from "../../../public/fotoLogin.svg";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main className="separador">
      <div className="cor-fundo-formulario">
        <div className="posicao-central">
          <h2>Login</h2>
          <form action="">
            <div className="formulario-login">
              <input
                type="email"
                placeholder="Digite seu e-mail..."
                id="email"
                name="email"
                required
              />
              <input
                type="password"
                placeholder="Digite sua senha..."
                id="senha"
                name="senha"
                required
              />
            </div>
            <button type="submit">Entrar</button>
          </form>
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
        <Image
          src={fotoLogin}
          width={700}
          quality={100}
          alt="Foto página login"
        />
      </div>
    </main>
  );
}
