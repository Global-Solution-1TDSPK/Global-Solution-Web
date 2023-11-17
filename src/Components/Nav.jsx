import Link from "next/link";
import "../Components/Nav.scss";
import Image from "next/image";
import logoNotredame from "../../public/logo-notredame.png";

export default function Nav() {
  return (
    <nav className="logo-centro">
      <div className="navbar">
        <Link href="/conteudoHome">
        <Image src={logoNotredame} width={290} quality={100} />
        </Link>
      </div>
    </nav>
  );
}
