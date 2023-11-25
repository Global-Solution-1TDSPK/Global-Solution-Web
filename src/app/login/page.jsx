"use client"

import "./login.scss";
import fotoLogin from "../../../public/fotoLogin.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {

  const [loginusu, setLoginusu] = useState();  

  const handleChange = (e) => {
    setLoginusu({ ...loginusu, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Dados do Cadastro Enviados:", loginusu);
    fetch(`http://localhost:8080/Loja/rest/login/verificarLogin?email` + loginusu.email + '&senha' + loginusu.senha, {
      method: "get",
    })
      .then(() => (window.location = "/conteudoHome"))
      .catch((error) => console.error(error));
  };


  return (
    <main className="separador">
      <div className="cor-fundo-formulario">
        <div className="posicao-central">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="formulario-login">
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
                placeholder="Digite sua senha..."
                id="senha"
                name="senha"
                required
                onChange={handleChange}
              />
            </div>
            <button type="submit">Entrar</button>
          </form>
          <div className="linha"></div>
          <p>
            Ainda não tem uma conta?
            <Link href="/cadastrar">
              <span className="cor-cadastro"> cadastre-se :)</span>
            </Link>
          </p>
          <div className="linha-p-adm">
          <Link href="/verificarLoginAdm">
          <p>Acesso Administrativo</p>
          </Link>
          </div>
        </div>
      </div>
      <div className="fundo-login">
        <Image
          src={fotoLogin}
          width={700}
          quality={100}
          alt="Foto página login"
        />
      </div>
    </main>
  );
}
