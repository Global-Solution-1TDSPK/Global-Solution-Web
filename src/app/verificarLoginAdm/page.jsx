import "./verificarLoginAdm.scss";
import "../login/login.scss";
import Link from "next/link";

export default function VerificarLoginAdm() {
  return (
    <main className="fundo-login-adm">
      <div className="posicao-central">
        <h2>Login Administrativo</h2>
        <form action="">
          <div className="formulario-login">
            <input
              type="text"
              placeholder="Digite seu usuário..."
              id="usu"
              name="usu"
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
          Voltar para
        <Link href="/login">
            <span> Login :)</span>
          </Link>
        </p>
      </div>
    </main>
  );
}
