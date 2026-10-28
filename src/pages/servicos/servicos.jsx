import SideBar from "../../components/sidebar/sidebar";
import Navigation from "../../components/navbar/navBar";
import "./servicos.css";
import { useState } from "react";
import ModalServico from "./components/modal-add-servico/modal-add-servico";
import login from "../../date/login";
import ListaServico from "./components/modal-lista-servico/modal-lista-servico";

const PageServicos = function () {
  const [dadosMock, setDadosMock] = useState(login.servicos);

  // Modal Cadastro Serviço
  const [mostrarModal, setMostrarModal] = useState(false);
  const buttonServico = function () {
    setMostrarModal(!mostrarModal);
  };

  // adiciona novo Serviço a lista de serviços
  const AdicionarServico = function (novoServico) {
    setDadosMock((dadosAtuais) => [...dadosAtuais, novoServico]);
  };

  const editarLista = function (edicao) {
    setDadosMock(edicao)
  }


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
              <button className="button-Novo-Servico estiloButton" onClick={buttonServico}>
                + Novo Serviço
              </button>
            </div>
          </div>
          <ListaServico
          dados = {dadosMock}
          editarLista = {editarLista}
          />
        </div>
      </div>
      {mostrarModal && (
        <ModalServico
          buttonTeste={buttonServico}
          salvarDados={AdicionarServico}
        />
      )}
    </>
  );
};

export default PageServicos;
