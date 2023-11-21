import "./dadosPessoais.scss";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";
import Link from "next/link";

export default function FormularioDadosPessoais() {
  return (
    <>
      <Nav />
      <main>
        <div className="ajuste-form-dados">
          <div className="container-dados-pessoais">
            <div className="posicao-form">
              <form action="">
                <div className="edicao-form-2">
                  <input
                    type="text"
                    placeholder="Digite seu nome..."
                    required="required"
                  />
                  <input type="text" placeholder="Digite seu sobrenome..." />
                </div>
                <div className="edicao-form">
                  <input type="email" placeholder="Digite seu e-mail..." />
                </div>
                <div className="edicao-form-2">
                  <select name="genero">
                    <option value="feminino">Feminino</option>
                    <option value="masculino">Masculino</option>
                  </select>
                  <input type="date" />
                </div>
                <div className="edicao-form">
                  <input
                    type="number"
                    placeholder="Digite seu cpf..."
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    title="Digite um CPF no formato: XXX.XXX.XXX-XX"
                  />
                </div>
                <div className="edicao-form">
                  <input
                    type="number"
                    placeholder="Digite seu número de telefone..."
                    title="Digite o telefone no formato: (XX) XXXXX-XXXX"
                  />
                </div>
                </form>
                <Link href="/conteudoHome">
                  <button type="submit">Atualizar</button>
                </Link>
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
