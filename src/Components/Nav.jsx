import Link from "next/link";
import "../Components/Nav.scss";
import Image from "next/image";
import logoNotredame from "../../public/logo-notredame.png";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo-centro">
        <div className="centro-img-navbar">
        <Link href="/principal">
          <Image src={logoNotredame} width={290} quality={100} />
        </Link>
        </div>
        <p>
          Faça{" "}
          <Link href="/login">
            <span>Login</span>
          </Link>{" "}
          ou{" "}
          <Link href="/cadastrar">
            <span>Cadastre-se</span>
          </Link>
        </p>
      </div>
    </nav>
  );
}
