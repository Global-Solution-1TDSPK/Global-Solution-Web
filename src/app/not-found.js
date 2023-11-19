"use client";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";
import Image from "next/image";
import erro from "../../public/not-found.png";
import "../styles/geral.scss";

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
