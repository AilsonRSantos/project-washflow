import "./sidebar.css";
import logo from "../../assets/logo.png";
import Navigation from "../navbar/navBar";

const SideBar = () => {
  return (
    <div className="tela">
      <div className="containerSideBar">
        <div className="photo-logo">
          <img src={logo} alt="Icone Marca" />
        </div>
        <div className="navigation">
          <h1>DashBoard</h1>
          <h1>Atendimentos</h1>
          <h1>Clientes</h1>
          <h1>Serviços</h1>
          <h1>Financeiro</h1>
          <h1>Produtos</h1>
          <h1>Relatórios</h1>
          <h1>Configurações</h1>
        </div>

        <div className="logout">
          <h1>Sair</h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
