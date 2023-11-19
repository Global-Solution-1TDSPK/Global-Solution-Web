import "./conteudoHome.scss";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";
import Link from "next/link";

export default function ConteudoHome() {
  return (
    <>
      <Nav />
      <main className="ajuste-fonts-home">
        <h1>
          <span>Meus</span> formulários
        </h1>
        <div className="ajuste-conteudo-form">
          <div className="ajustes-forms">
            <Link
              className="container-formularios"
              href="/formularioDadosPessoais"
            >
              <p>Dados Pessoais</p>
            </Link>
            <Link className="container-formularios" href="formularioTriagem">
              <p>Triagem</p>
            </Link>
          </div>
        </div>
        <h2>
          Formulários <span>concluidos</span>
        </h2>
        <div className="ajustes-forms">
          <div className="container-formularios"></div>
          <div className="container-formularios"></div>
          <div className="container-formularios"></div>
          <div className="container-formularios"></div>
          <div className="container-formularios"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
