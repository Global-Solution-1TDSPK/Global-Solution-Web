import "../Components/Footer.scss";
import Image from "next/image";
import insta from "../../public/instagram.png";
import x from "../../public/twitter.png";
import face from "../../public/facebook.png";
import linkedin from "../../public/linkedin.png";
import github from "../../public/github.png"

export default function Footer() {
  return (
    <footer className="padrao-footer">
      <div className="ajuste-icones">
        <Image src={insta} alt="instagram" />
        <Image src={face} alt="facebook" />
        <Image src={github} alt="github"/>
        <Image src={linkedin} alt="linkedin" />
        <Image src={x} alt="X" />
      </div>
      <p>© 2023 EZHealth. Todos os direitos reservados.</p>
    </footer>
  );
}
