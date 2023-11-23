"use client";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import erro from "../../public/not-found.png";
import "../styles/not-found.scss";

export default function Custom404() {
  return (
    <>
      <Nav />

      <main className="fundo-not-found">
        <Image src={erro} quality={100} />
        <h1 className="texto-not-found">Página não encontrada</h1>
      </main>

      <Footer />
    </>
  );
}
