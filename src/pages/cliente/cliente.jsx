import SideBar from "../../components/sidebar/sidebar";
import Navigation from "../../components/navbar/navBar";
import "./cliente.css";
import login from "../../date/login";
import { useState } from "react";
import { use } from "react";

const listaClientes = login.atividades;

const PageCliente = function () {
  const [mostrarCard, setMostrarCard] = useState(false);

  const [dadosFormulario, setDadosFormulario] = useState({
    nomecliente: "",
    cpf: "",
    telefone: "",
    cidade: "",
    veiculo: "",
  });
  const fomularioInicial = {
    nomecliente: "",
    cpf: "",
    telefone: "",
    cidade: "",
    veiculo: "",
  };

  const [campoVazio, setCampoVazio] = useState("");
  const [response, setResponse] = useState("none");

  const [inputValue, setInputValue] = useState("");

  const [mostrarCardFiltro, setMostrarCardFiltro] = useState(false);
  const [filtro, setFiltro] = useState({ cidade: "", periodo: "" });

  const filtrarClientes = function (cidade, lista, input) {
    let resultado = [];
    resultado = lista.filter(
      (e) =>
        (cidade === "" || cidade === e.cidade) &&
        (input === "" || e.nomecliente.toLocaleLowerCase().includes(input)),
    );
    return resultado;
  };

  const buttonCliente = function button() {
    if (mostrarCard) {
      setMostrarCard(false);
      setDadosFormulario(fomularioInicial);
    } else {
      setMostrarCard(true);
      setDadosFormulario(fomularioInicial);
      setResponse("none");
    }
  };

  const buttonFiltro = function Cadastro() {
    if (!mostrarCardFiltro) {
      setMostrarCardFiltro(true);
    } else {
      setMostrarCardFiltro(false);
    }
  };

  const cadastro = function cadastro(e) {
    e.preventDefault();
    const verificacao = listaClientes.some(
      (cliente) => cliente.cpf === dadosFormulario.cpf,
    );

    if (!verificacao) {
      let ultimoId = 1;
      if (listaClientes.length !== 0) {
        ultimoId = listaClientes.reduce((maiorID, idAtual) => {
          if (maiorID < idAtual.id) {
            maiorID = idAtual.id;
          }
          return maiorID;
        }, 1);
        ultimoId += 1;
      }
      const novoCliente = {
        ...dadosFormulario,
        id: ultimoId,
      };

      listaClientes.push(novoCliente);
      setDadosFormulario(fomularioInicial);
      setResponse("sucesso");
      setMostrarCard(false)
    } else {
      setResponse("falha");
      console.log("teste");
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
                <div className="card-novo-cliente modal-cadastro">
                  <div>
                    <h1>Cadastro Cliente</h1>
                  </div>
                  <form onSubmit={cadastro}>
                    <div className="card-dados-clientes">
                      <label htmlFor="nome">Nome </label>
                      <input
                        type="text"
                        id="nome"
                        name="nomecliente"
                        value={dadosFormulario.nomecliente}
                        onChange={(e) =>
                          setDadosFormulario({
                            ...dadosFormulario,
                            [e.target.name]: e.target.value,
                          })
                        }
                        required
                      />
                      <label htmlFor="cpf"> CPF</label>
                      <input
                        type="text"
                        name="cpf"
                        id="cpf"
                        value={dadosFormulario.cpf}
                        onChange={(e) =>
                          setDadosFormulario({
                            ...dadosFormulario,
                            [e.target.name]: e.target.value,
                          })
                        }
                        minLength={11}
                        required
                      />
                      <label htmlFor="telefone">Telefone</label>
                      <input
                        type="text"
                        name="telefone"
                        id="telefone"
                        value={dadosFormulario.telefone}
                        onChange={(e) =>
                          setDadosFormulario({
                            ...dadosFormulario,
                            [e.target.name]: e.target.value,
                          })
                        }
                        required
                      />
                      <label htmlFor="cidade">Cidade</label>
                      <select
                        name="cidade"
                        id="cidade"
                        className="inputCidade"
                        value={dadosFormulario.cidade}
                        onChange={(e) =>
                          setDadosFormulario({
                            ...dadosFormulario,
                            [e.target.name]: e.target.value,
                          })
                        }
                      >
                        <option value="">--selecione a cidade--</option>
                        <option value="Vitoria">Vitoria</option>
                        <option value="Vila Velha">Vila Velha</option>
                        <option value="Cariacica">Cariacica</option>
                        <option value="Serra">Serra</option>
                        <option value="Norte do Estado">Norte do Estado</option>
                        <option value="Sul do Estado">Sul do Estado</option>
                      </select>
                      <label htmlFor="veiculo">Veiculo</label>
                      <input
                        type="text"
                        name="veiculo"
                        id="veiculo"
                        value={dadosFormulario.veiculo}
                        onChange={(e) =>
                          setDadosFormulario({
                            ...dadosFormulario,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="card-cliente-button">
                      <button type="button" onClick={buttonCliente}>
                        Cancelar
                      </button>
                      <button type="submit">Cadastrar</button>
                    </div>
                  </form>
                  <div className="response">
                    {response === "sucesso" && (
                      <span className="sucesso">
                        Cliente cadastrado com sucesso
                      </span>
                    )}
                    {response === "falha" && (
                      <span className="falha">
                        Falha!! este cliente já está cadastrado
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="clientes-Cards">
              <div className="cliente-card">
                <div className="total-Clientes">
                  <h2> Total de Clientes: {listaClientes.length} </h2>
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
                <button className="ButtonFiltros" onClick={buttonFiltro}>
                  Filtros
                </button>
              </div>
              {mostrarCardFiltro && (
                <div className="container-card-Filtro modal-filtro">
                  <div className="card-filtro-interno">
                    <div className="Filtros">
                      <label htmlFor="filtroCidade">Cidade</label>
                      <select
                        name="filtroCidades"
                        id="filtroCidade"
                        onChange={(e) => {
                          setFiltro({
                            ...filtro,
                            cidade: e.target.value,
                          });
                        }}
                      >
                        <option value="">--Todas as Cidades--</option>
                        <option value="Vitoria">Vitoria</option>
                        <option value="Vila Velha">Vila Velha</option>
                        <option value="Cariacica">Cariacica</option>
                        <option value="Serra">Serra</option>
                        <option value="Norte do Estado">Norte do Estado</option>
                        <option value="Sultado do Estado">Sul do Estado</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="lista-Clientes">
              <div className="header-tabela-clientes">
                <h3>Cliente</h3>
                <h3>Telefone</h3>
                <h3>Veículo</h3>
                <h3>Último atendimento</h3>
              </div>

              {filtrarClientes(filtro.cidade, listaClientes, inputValue).map(
                (e) => {
                  return (
                    <div key={e.id}>
                      <div className="lista-Clientes-ativos">
                        <span>{e.nomecliente}</span>
                        <span>{e.telefone}</span>
                        <span>{e.veiculo}</span>
                        <span>{e.serviços}</span>
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageCliente;
