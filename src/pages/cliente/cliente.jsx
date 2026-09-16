import SideBar from "../../components/sidebar/sidebar";
import Navigation from "../../components/navbar/navBar";
import "./cliente.css";
import login from "../../date/login";
import { useState, useSyncExternalStore } from "react";
import { use } from "react";

const listaClientes = login.atividades;

const PageCliente = function () {
  const [mostrarCard, setMostrarCard] = useState(false);
  const [valorcpf, setValorCpf] = useState("");
  const [response, setResponse] = useState("none");
  const [inputValue, setInputValue] = useState("");
  const [totalClientes, setTotalClientes] = useState(listaClientes.length);
  const [mostrarCardFiltro, setMostrarCardFiltro] = useState(false);

  const buttonCliente = function button() {
    if (mostrarCard === true) {
      setMostrarCard(false);
    } else {
      setMostrarCard(true);
    }
  };

  const buttonCadastro = function cadastro() {
    if (!listaClientes.some((cliente) => cliente.cpf === valorcpf)) {
      setResponse("sucesso");
      // aqui eu crio o cliente novo//
      setTimeout(() => {
        setMostrarCard(false);
        setResponse("none");
      }, 3000);
    } else {
      setResponse("falha");
    }
  };

  return (
    <>
      <div className="sideBar-Cliente">
        <SideBar />
        <div className="rightSide-Cliente">
          <div className="navBar-Cliente">
            <Navigation />
          </div>
          <div className="main-Cliente">
            <div className="card-main-novo-cliente">
              <button className="novo-Cliente" onClick={buttonCliente}>
                + Novo Cliente
              </button>

              {mostrarCard && (
                <div className="card-novo-cliente modal">
                  <div>
                    <h1>Cadastro Cliente</h1>
                  </div>
                  <div className="card-dados-clientes">
                    <label htmlFor="name">Nome </label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="cpf"> CPF</label>
                    <input
                      type="text"
                      name="cpf"
                      id="cpf"
                      value={valorcpf}
                      onChange={(e) => setValorCpf(e.target.value)}
                    />
                    <label htmlFor="phone">Telefone</label>
                    <input type="text" name="phone" id="phone" />
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" name="cidade" id="cidade" />
                    <label htmlFor="veiculo">Veiculo</label>
                    <input type="text" name="veiculo" id="veiculo" />
                  </div>
                  <div className="card-cliente-button">
                    <div onClick={buttonCliente}>Cancelar</div>
                    <div onClick={buttonCadastro}>Cadastrar</div>
                  </div>
                  <div className="response">
                    {response === "sucesso" && (
                      <span className="sucesso">
                        Cadastro concluido com sucesso
                      </span>
                    )}
                    {response === "falha" && (
                      <span className="falha">Cliente já cadastrado</span>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="clientes-Cards">
              <div className="cliente-card">
                <div className="total-Clientes">
                  <h2> Total de Clientes: {totalClientes} </h2>
                </div>
              </div>

              <div className="cliente-card">
                <div className="clientes-Ativos">
                  <h2>Cliente Ativos</h2>
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
                <input
                  type="text"
                  placeholder="Buscar Cliente"
                  value={inputValue}
                  onChange={(e) =>
                    setInputValue(e.target.value.toLocaleLowerCase())
                  }
                />
                <button>Filtros</button>
              </div>
            </div>

            {/* <div className="container-card-Filtro">
              <div className="card-filtro-interno">
                <div className="Filtros">
                  <h3>Cidade</h3>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div className="Filtros">
                  <h3>Ultimos 30 dias</h3>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div className="Filtros">
                  <h3>Ultimos 60 dias</h3>
                </div>
                <div className="Filtros">
                  <h3>Ultimos 3 meses</h3>
                </div>
              </div>
            </div> */}

            <div className="lista-Clientes">
              <div className="header-tabela-clientes">
                <h3>Cliente</h3>
                <h3>Telefone</h3>
                <h3>Veículo</h3>
                <h3>Último atendimento</h3>
              </div>
              {inputValue === ""
                ? listaClientes.map((atividades) => {
                    return (
                      <div key={atividades.id}>
                        <div className="lista-Clientes-ativos">
                          <span>{atividades.nomecliente}</span>
                          <span>{atividades.telefone}</span>
                          <span>{atividades.veiculo}</span>
                          <span>{atividades.serviços}</span>
                        </div>
                      </div>
                    );
                  })
                : listaClientes
                    .filter((i) =>
                      i.nomecliente.toLocaleLowerCase().includes(inputValue),
                    )
                    .map((atividades) => {
                      return (
                        <div key={atividades.id}>
                          <div className="lista-Clientes-ativos">
                            <span>{atividades.nomecliente}</span>
                            <span>{atividades.telefone}</span>
                            <span>{atividades.veiculo}</span>
                            <span>{atividades.serviços}</span>
                          </div>
                        </div>
                      );
                    })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageCliente;
