import { useState } from "react";
import logo from "../../assets/logo.png";
import backgroundPhoto from "../../assets/background-photo.png";
import login from "../../date/login";
import "./login.css";

function PageLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassaword] = useState("");
  const [tela, setTela] = useState("login");

  const button = function fazerlogin() {
    if (login.email === email && login.senha === password) {
      console.log("login concluido");
    } else {
      console.log("Email Errado");
    }
  };

  const buttonEnviar = function Enviar() {
    tela === "login" ? (setTela("forgotPassword")) : (setTela("login"))
  };

  return (
    <>
      <div className="background"></div>

      {tela === "login" ? (
        <div className="container">
          <div className="backgroundGlow"></div>

          <div className="containerLogin">
            <div className="containerImg">
              <img src={logo} alt="foto logo" />
            </div>

            <div className="containerEmail">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="containerSenha">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassaword(e.target.value)}
              />
            </div>
            <button className="buttonForgotPassword" onClick={buttonEnviar}>
              Esqueceu a senha?
            </button>
            <button className="btn" onClick={button}>
              Entrar
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="backgroundGlow"></div>

          <div className="containerLogin">
            <div className="containerImg">
              <img src={logo} alt="foto logo" />
            </div>

            <div className="containerEmail">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button className="btn" onClick={button}>
              Enviar
            </button>
            <button className="buttonForgotPassword"
            onClick={buttonEnviar}
            >Voltar</button>
          </div>

        </div>
      )}
    </>
  );
}

export default PageLogin;
