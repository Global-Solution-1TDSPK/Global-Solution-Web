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
                </div>
                <div className="edicao-form">
                  <input
                    type="email"
                    placeholder="Digite seu e-mail..."
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="edicao-form-2">
                  <select name="genero" id="genero" required>
                    <option value="sexo">Selecione seu sexo!!</option>
                    <option value="feminino">Feminino</option>
                    <option value="masculino">Masculino</option>
                  </select>
                  <input
                    type="date"
                    title="Digite sua data de nascimento..."
                    id="nascimento"
                    name="nascimento"
                    required
                  />
                </div>
                <div className="edicao-form">
                  <input
                    type="number"
                    placeholder="Digite seu cpf..."
                    title="Digite um CPF no formato: XXX.XXX.XXX-XX"
                    id="cpf"
                    name="cpf"
                    required
                  />
                </div>
                <div className="edicao-form">
                  <input
                    type="number"
                    placeholder="Digite seu número de telefone..."
                    title="Digite o telefone no formato: (XX) XXXXX-XXXX"
                    id="telefone"
                    name="telefone"
                    required
                  />
                </div>
                <div className="ajuste-botao">
                  <button type="submit">Atualizar</button>
                  <Link href="/conteudoHome">
                    <button type="submit">Voltar</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
