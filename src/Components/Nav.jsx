import Link from "next/link";
import "../Components/Nav.scss";
import Image from "next/image";
import roseta from "../../public/roseta.svg";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo-centro">
        <div className="centro-img-navbar">
          <Link href="/principal">
            <Image src={roseta} width={100} quality={100} />
          </Link>
        </div>
        <Link href="/login">
          <p>Login</p>
        </Link>
      </div>
    </nav>
  );
}
