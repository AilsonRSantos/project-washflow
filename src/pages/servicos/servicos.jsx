import SideBar from "../../components/sidebar/sidebar";
import Navigation from "../../components/navbar/navBar";
import "./servicos.css";
import { use, useState } from "react";
import ModalServico from "./components/modal-add-servico";
import login from "../../date/login";

const PageServicos = function () {
  const [dadosMock, setDadosMock] = useState(login.servicos)

  // Modal Cadastro Serviço
  const [mostrarModal, setMostrarModal] = useState(false);
  const buttonServico = function () {
   setMostrarModal(!mostrarModal)
  };

  // adiciona novo Serviço a lista de serviços
  const AdicionarSerivico = function(novoServico) {
    setDadosMock((dadosAtuais) => [
      ...dadosAtuais, novoServico
  ])
  }

  console.log(dadosMock)

  return (
    <>
      <div className="mainPage">
        <SideBar />
        <div className="rightSide">
          <div className="navBar">
            <Navigation />
          </div>
          <div className="servicos-content">
            <div className="servicos-header">
              <h1>Servicos</h1>
              <button className="button-Novo-Servico" onClick={buttonServico}>
                {" "}
                + Novo Serviço
              </button>
            </div>
          </div>
        </div>
      </div>
      {mostrarModal && <ModalServico 
      buttonTeste={buttonServico}
      salvarDados={AdicionarSerivico}
      />}
    </>
  );
};

export default PageServicos;
