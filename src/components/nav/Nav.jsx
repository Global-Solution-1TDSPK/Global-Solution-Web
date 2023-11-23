import Link from "next/link";
import "./Nav.scss";
import Image from "next/image";
import roseta from "../../../public/roseta.svg";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo-centro">
        <div className="centro-img-navbar">
          <Link href="/principal">
            <Image src={roseta} width={80} quality={100} />
          </Link>
        </div>
        <Link href="/login">
          <p>Página Login</p>
        </Link>
      </div>
    </nav>
  );
}
