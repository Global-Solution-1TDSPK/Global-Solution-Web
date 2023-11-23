import fotoCadastro from "../../../public/fotoCadastro.svg";
import "../cadastrar/cadastrar.scss";
import Image from "next/image";
import Link from "next/link";

export default function Cadastrar() {
  return (
    <main className="separador">
      <div className="cor-fundo-formulario">
        <div className="posicao-central">
          <h2>Cadastrar</h2>
          <form action="cadastro.js" method="POST">
            <div className="formulario-cadastro">
              <input
                type="text"
                placeholder="Digite seu nome..."
                id="nome"
                name="nome"
                required
              />
              <input
                type="text"
                placeholder="Digite seu sobrenome..."
                id="sobrenome"
                name="sobrenome"
                required
              />
              <input
                type="email"
                placeholder="Digite seu e-mail..."
                id="email"
                name="email"
                required
              />
              <input
                type="password"
                placeholder="Digite uma senha..."
                id="senha"
                name="senha"
                required
              />
            </div>
            <button>Cadastrar</button>
          </form>
          <div className="linha"></div>
          <p>
            Já tem uma conta? Faça
            <Link href="/login">
              <span className="cor-login"> login :)</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="fundo-cadastro">
        <Image
          src={fotoCadastro}
          width={700}
          quality={100}
          alt="Foto página de cadastro"
        />
      </div>
    </main>
  );
}
