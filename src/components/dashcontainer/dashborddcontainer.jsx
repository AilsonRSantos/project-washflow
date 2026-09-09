import "./dashbord.css";
import login from "../../date/login";
import { useState } from "react";
const DashbordContainer = () => {
  const dataRecente = login.atividades;

  return (
    <div className="dashbord">
      <div className="dashbord-cards">
        <div className="dashbord-card">
          <h2 className="card-tittle">Faturamento</h2>
          <span className="card-value"> R$ {login.faturamento},00 </span>
        </div>
        <div className="dashbord-card">
          <h2 className="card-tittle"> Clientes</h2>
          <span className="card-value">{login.clientes}</span>
        </div>

        <div className="dashbord-card">
          <h2 className="card-tittle"> Veículos</h2>
          <span className="card-value">{login.veiculos}</span>
        </div>
        <div className="dashbord-card">
          <h2 className="card-tittle">Serviços</h2>
          <span className="card-value">{login.serviços}</span>
        </div>
      </div>

      <div className="dashbord-content">
        <div className="dashbord-panel">
          <h2 className="panel-tittle">Faturamento</h2>
        </div>

        <div className="dashbord-pnel">
          <h2 className="panel-tittle"> Serviços mais realizados</h2>
          <div className="dashbord-pnel-content">
            <div className="pie-chart">
              <h2>circulo</h2>
            </div>
            <div className="high-turnover-services">
              <p>serviço 1</p>
              <p>serviço 2</p>
              <p>serviço 3</p>
              <p>serviço 4</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dashbord-activity">
        <div className="dashbord-activity-header">
          <h2 className="pane-tittle">Atividades recentes</h2>
          <h2 className="pane-link"> Ver Todos</h2>
        </div>

        <div className="dashbord-activity-recent-interactions">
          {dataRecente
          .sort((a,b) => {
            return new Date(b.data) - new Date(a.data)
          })
          .map((atividades) => { 
            return (
            <div className="dashbord-activity-interactions"
            key={atividades.id}>
              <span>{atividades.nomecliente}</span>
              <span>{atividades.veiculo}</span>
              <span>{atividades.serviços}</span>
              <span>R${atividades.valor},00</span>
              <span>{atividades.data}</span>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default DashbordContainer;
