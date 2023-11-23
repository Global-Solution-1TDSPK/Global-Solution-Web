import "./Footer.scss";
import Image from "next/image";
import insta from "../../../public/instagram.png";
import twitter from "../../../public/twitter.png";
import face from "../../../public/facebook.png";
import linkedin from "../../../public/linkedin.png";
import github from "../../../public/github.png";

export default function Footer() {
  return (
    <footer className="padrao-footer">
      <div className="ajuste-icones">
        <a href="https://www.instagram.com/_dogzeiraa_/" target="_blank">
          <Image src={insta} alt="instagram" />
        </a>

        <a href="https://www.facebook.com/" target="_blank">
          <Image src={face} alt="facebook" />
        </a>
        <a href="https://github.com/Global-Solution-1TDSPK/Global-Solution-Web" target="_blank">
          <Image src={github} alt="github" />
        </a>

        <a href="https://www.linkedin.com/in/doug-rocha/" target="_blank">
          <Image src={linkedin} alt="linkedin" />
        </a>

        <a href="https://twitter.com/" target="_blank">
          <Image src={twitter} alt="twitter" />
        </a>
      </div>
      <p>© 2023 EZHealth. Todos os direitos reservados.</p>
      <div className="integrantes">
        <p>99055 - Douglas Danilo Rocha de Sousa - Todo o resto do projeto</p>
        <p>97706 - Marcelo Fortes Junior - formulários </p>
        <p>98469 - Pedro Duarte Farias - components</p>
       <p>551322 - Gabriel Caverzan - Rotas </p>
        <p></p>
      </div>
    </footer>
  );
}
