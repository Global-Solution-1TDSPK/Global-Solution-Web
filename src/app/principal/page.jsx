import "./principal.scss";
import roseta from "../../../public/roseta.svg";
import Image from "next/image";
import fotoPrincipal from "../../../public/foto-principal.svg";
import fotoPrincipal2 from "../../../public/foto-principal-2.svg";
import Link from "next/link";

export default function Principal() {
  return (
    <main>
      <div className="container">
        <div className="roseta-centro">
          <Image src={roseta} width={200} alt="Rosa Notredame" />
          <h1>Diga adeus às salas de espera</h1>
          <Link href="/login"> 
            <button>Comece agora</button>
          </Link>

          <Link href={"/principal/#saiba-mais"}>
            <button>Saiba mais</button>
          </Link>
        </div>
      </div>
      <div className="centralizando-containers" id="saiba-mais">
        <div className="container-2">
          <div className="ajuste-texto-principa-container-2">
            <h2>
              Bem-vindo ao <span>EZHealth</span>
            </h2>
            <p>
              Imagine isso: você está em casa, confortavelmente tomando uma
              xícara de café, quando derrepente passa mal e precisa ir para o
              hospital, você corre, pega seu celular e já vai preechendo seu
              formulário de triagem. Quando você entrar no hospital, eles já
              estarão cientes dos seus detalhes médicos.
            </p>
          </div>
        </div>

        <div className="container-3">
          <div>
            <Image src={fotoPrincipal} alt="Foto médicos" />
          </div>
          <div className="ajuste-texto-principal">
            <h3>
              Uma experiência de saúde mais suave, rápida e melhor com a
              <span> EZHealth</span>
            </h3>
            <p>
              Os dias de encontros desconfortáveis com equipes de saúde
              desconhecidas, fazendo perguntas pessoais em um consultório frio e
              estéril, ficaram para trás. Conosco, você controla a narrativa da
              história da sua saúde.
            </p>
          </div>
        </div>
        <div className="container-4">
          <div className="ajuste-texto-principal">
            <h3>
              Sua <span>privacidade</span> é a nossa principal preocupação
            </h3>
            <p>
              Tenha certeza de que seus dados são tratados exatamente como
              declarado em nossa política de privacidade. Estamos em
              conformidade com os padrões internacionais de segurança e
              privacidade de dados.
            </p>
          </div>
          <div>
            <Image
              src={fotoPrincipal2}
              width={500}
              height={500}
              alt=" Foto politica de privacidade"
            />
          </div>
        </div>
        <div className="container-3">
          <div className="ajuste-texto-principa-container-2">
            <h3>Aqui está como funciona</h3>
            <p>
              Preencha seu formulário de triagem com os detalhes necessários e
              envie. Voilà! Seu formulário é enviado diretamente para seu
              hospital, eliminando aquela etápa de triagem massiva normalmente
              implementada.
            </p>
          </div>
        </div>
      </div>
      <div className="texto-final">
        <div className="centro-texto-final">
          <h3>Junte-se a nós</h3>
          <p>
            Diga adeus às filas das emergências e olá a uma experiência de saúde
            mais conveniente, direto na palma de suas mãos. Assuma o controle de
            sua saúde agora! Então, o que está esperando?
          </p>
          <Link href="/login"> 
            <button>Começar</button>
          </Link>
          <Link href={"/principal/#saiba-mais"}>
            <button>Saiba mais</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
