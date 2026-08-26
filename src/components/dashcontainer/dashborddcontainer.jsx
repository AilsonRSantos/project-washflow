import "./dashbord.css";

const DashbordContainer = () => {
  return (
    <div className="dashbord">
      <div className="dashbord-cards">
        <div className="dashbord-card">
          <h2 className="card-tittle">Faturamento</h2>
          <span className="card-value">R$ 8.540,00</span>
        </div>
        <div className="dashbord-card">
          <h2 className="card-tittle"> Clientes</h2>
          <span className="card-value">120</span>
        </div>

        <div className="dashbord-card">
          <h2 className="card-tittle"> Veículos</h2>
          <span className="card-value">87</span>
        </div>
        <div className="dashbord-card">
          <h2 className="card-tittle">Serviços</h2>
          <span className="card-value">245</span>
        </div>
      </div>

      <div className="dashbord-content">
        <div className="dashbord-panel">
          <h2 className="panel-tittle">Faturamento</h2>
        </div>

        <div className="dashbord-pnel">
          <h2 className="panel-tittle"> Serviços realizados mais realizados</h2>
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
        <h2 className="pane-tittle">Atividades reentes</h2>
      </div>
    </div>
  );
};

export default DashbordContainer;
