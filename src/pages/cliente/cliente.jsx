import SideBar from "../../components/sidebar/sidebar";
import Navigation from "../../components/navbar/navBar";
import "./cliente.css"
import login from "../../date/login";

const listaClientes = login.atividades

const PageCliente = function () {
  return (
      <>
        <div className="sideBar-Cliente">
          <SideBar />
          <div className="rightSide-Cliente">
            <div className="navBar-Cliente">
              <Navigation />
            </div>
            <div className="main-Cliente">
                <button className="novo-Cliente"> + Novo Cliente</button>
                <div className="clientes-Cards">

                    <div className="cliente-card">
                    <div className="total-Clientes">
                        <h2>Clientes</h2>
                    </div>
                    </div>

                    <div className="cliente-card">
                    <div className="clientes-Ativos">
                        <h2>Ativos</h2>
                    </div>
                    </div>

                    <div className="cliente-card">
                    <div className="clientes-Novos">
                        <h2>Novos este mês</h2>
                    </div>
                    </div>

                </div>

                <div className="browser-Cliente">
                    <h2>Buscar Cliente</h2>
                    <div className="input-Cliente">
                    <input type="text" placeholder="Buscar Cliente"/>
                    <button>Filtrar</button>
                    </div>
                </div>

                <div className="lista-Clientes">
                    <div className="header-tabela-clientes">
                        <h3>Cliente</h3>
                        <h3>Telefone</h3>
                        <h3>Veículo</h3>
                        <h3>Último atendimento</h3>
                    </div>
                    {listaClientes
                    .sort((a,b) => {
                       return new Date(b.data) - new Date(a.data)
                    })
                    .map((atividades) => { 
                        return ( 
                    <div> 
                    <div className="lista-Clientes-ativos" key={atividades.id}>
                        <span>{atividades.nomecliente}</span>
                        <span>{atividades.telefone}</span>
                        <span>{atividades.veiculo}</span>
                        <span>{atividades.serviços}</span>
                    </div>
                    </div>
                    )})}

                </div>
              
            </div>
          </div>
        </div>
      </>
  );
};

export default PageCliente;
