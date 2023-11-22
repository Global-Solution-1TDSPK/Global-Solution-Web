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
                    id="nome"
                  />
                  <input
                    type="text"
                    placeholder="Digite seu sobrenome..."
                    id="sobrenome"
                  />
                </div>
                <div className="edicao-form">
                  <input
                    type="email"
                    placeholder="Digite seu e-mail..."
                    id="email"
                  />
                </div>
                <div className="edicao-form-2">
                  <select name="genero" id="genero">
                    <option value="sexo">Selecione seu sexo!!</option>
                    <option value="feminino">Feminino</option>
                    <option value="masculino">Masculino</option>
                  </select>
                  <input
                    type="date"
                    title="Digite sua data de nascimento..."
                    id="nascimento"
                  />
                </div>
                <div className="edicao-form">
                  <input
                    type="number"
                    placeholder="Digite seu cpf..."
                    title="Digite um CPF no formato: XXX.XXX.XXX-XX"
                    id="cpf"
                  />
                </div>
                <div className="edicao-form">
                  <input
                    type="number"
                    placeholder="Digite seu número de telefone..."
                    title="Digite o telefone no formato: (XX) XXXXX-XXXX"
                    id="telefone"
                  />
                </div>
                <Link href="/conteudoHome">
                  <button type="submit">Atualizar</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
