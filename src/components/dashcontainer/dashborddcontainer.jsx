import "./dashbord.css"

const DashbordContainer = () => {

  return (
    <div className="dashbord">
      <div className="dashbord-header">
        <h1 className="dashbord-tittle"> DashBord</h1>
        <p>Visão geral do seu negócio</p>
      </div>

      <div className="dashbord-cards">
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
        <div className="dashbord-card">
          <h2 className="card-tittle">Faturamento</h2>
          <span className="card-value">R$ 8.540</span>
        </div>
      </div>

      <div className="dashbord-content">
        <div className="dashbord-panel">
          <h2 className="panel-tittle">Faturmento</h2>
        </div>

        <div className="dashbord-pnel">
          <h2 className="panel-tittle"> Serviços realizados</h2>
        </div>
      </div>

      <div className="dashbord-activity">
        <h2 className="pane-tittle">Atividades reentes</h2>
      </div>
    </div>
  );
};

export default DashbordContainer;
