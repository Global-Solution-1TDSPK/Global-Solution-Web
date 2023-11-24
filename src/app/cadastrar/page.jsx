"use client";

import { useState } from "react";
import fotoCadastro from "../../../public/fotoCadastro.svg";
import "../cadastrar/cadastrar.scss";
import Image from "next/image";
import Link from "next/link";

export default function Cadastrar() {
  

  const [cadastro, setCadastro] = useState();

  let metodo = "post";
  

  const handleChange = (e) => {
    setCadastro({ ...cadastro, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Dados do Cadastro Enviados:", cadastro);

    fetch(`http://localhost:8080/Loja/rest/login`, {
      method: metodo,
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(cadastro),
    })
      .then(() => (window.location = "/login"))
      .catch((error) => console.error(error));
  };

  return (
    <main className="separador">
      <div className="cor-fundo-formulario">
        <div className="posicao-central">
          <h2>Cadastrar</h2>
          <form onSubmit={handleSubmit}>
            <div className="formulario-cadastro">
              <input
                type="text"
                placeholder="Digite seu nome..."
                id="nome"
                name="nome"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Digite seu sobrenome..."
                id="sobrenome"
                name="sobrenome"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Digite seu e-mail..."
                id="email"
                name="email"
                required
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Digite uma senha..."
                id="senha"
                name="senha"
                required
                onChange={handleChange}
              />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
          <div className="linha"></div>
          <p>
            Já tem uma conta? Faça
            <Link href="/login">
              <span className="cor-login"> login :)</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="fundo-cadastro">
        <Image
          src={fotoCadastro}
          width={700}
          quality={100}
          alt="Foto página de cadastro"
        />
      </div>
    </main>
  );
}
