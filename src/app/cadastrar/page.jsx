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
          <div className="formulario-cadastro">
            <input type="text" placeholder="Digite seu nome..." />
            <input type="text" placeholder="Digite um usuário..." />
            <input type="password" placeholder="Digite uma senha..." />
          </div>
          <button>Cadastrar</button>
          <p>
            Já é cadastrado? se sim clique em fazer
            <Link href="/login">
              <span className="cor-login"> login</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="fundo-cadastro">
        <Image src={fotoCadastro} width={700} quality={100} />
      </div>
    </main>
  );
}
