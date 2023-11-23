import "./triagem.scss";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

export default function Triagem() {
  return (
    <>
      <Nav />
      <main>
        <div className="ajuste-container-form-triagem">
          <div className="container-form-triagem">
            <form action="">
              <div className="ajuste-form-triagen">
                <label htmlFor="motivo-visita-hospital">
                  <span>Qual é o motivo principal</span> da sua visita ao
                  hospital hoje?
                </label>
                <textarea
                  name="motivo-visita-hospital"
                  id="motivo-visita-hospital"
                  cols="30"
                  rows="10"
                ></textarea>
                <label htmlFor="medicamento-regurlamente">
                  Você está atualmente tomando algum medicamento regularmente?
                  <span> Se sim, quais são eles?</span>
                </label>
                <textarea
                  name="medicamento-regurlamente"
                  id="medicamento-regurlamente"
                  cols="30"
                  rows="10"
                ></textarea>
                <label htmlFor="condição médica pré-existente">
                  Você tem alguma condição médica pré-existente ou histórico
                  médico relevante que devemos saber?{" "}
                  <span>Se sim, quais são eles?</span>
                </label>
                <textarea
                  name="condição-médica-pré-existente"
                  id="condição-médica-pré-existente"
                  cols="30"
                  rows="10"
                ></textarea>
                <label htmlFor="sintoma-específico">
                  Você experimentou algum sintoma específico recentemente, como
                  <span>
                    {" "}
                    febre, tosse persistente, dificuldade respiratória
                  </span>{" "}
                  ou outros sintomas preocupantes?
                </label>
                <textarea
                  name="sintoma-específico"
                  id="sintoma-específico"
                  cols="30"
                  rows="10"
                ></textarea>
                <label htmlFor="COVID-19">
                  Já teve contato próximo com alguém diagnosticado com doenças
                  infecciosas, como <span>COVID-19</span>, nos últimos 14 dias?
                </label>
                <textarea
                  name="COVID-19"
                  id="COVID-19"
                  cols="30"
                  rows="10"
                ></textarea>
                <label htmlFor="doenças-contagiosas">
                  Você esteve viajando recentemente para áreas com{" "}
                  <span>surtos de doenças contagiosas?</span>
                </label>
                <textarea
                  name="doenças-contagiosas"
                  id="doenças-contagiosas"
                  cols="30"
                  rows="10"
                ></textarea>
                <div className="ajuste-botao-triagem">
                  <button type="submit">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
