import SideBar from "../../components/sidebar/sidebar";
import Navigation from "../../components/navbar/navBar";
import "./cliente.css";
import login from "../../date/login";
import { useState } from "react";
import { use } from "react";

// const listaClientes = login.atividades;

const PageCliente = function () {
  const [listaClientes, setListaClientes] = useState(login.atividades);
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

  const [clienteSelecionado, setClienteSelecionado] = useState();
  const cliente = listaClientes.find((e) => e.id === clienteSelecionado);
  const [mostrarInputs, setMostrarInputs] = useState(false);

  const editarCliente = function () {
    setDadosFormulario({ ...cliente });
  };
  const buttonSaveEdit = function (e) {
    e.preventDefault();
    const edicao = listaClientes.map((x) => {
      if (x.id === clienteSelecionado) {
        return { ...x, ...dadosFormulario };
      }
      return x;
    });
    setDadosFormulario(fomularioInicial);
    setMostrarInputs(false);
    return setListaClientes(edicao);
  };

  const excluirCliente = function (lista, id) {
    const novaLista = lista.filter((e) => e.id !== id);
    return novaLista;
  };

  const [campoVazio, setCampoVazio] = useState("");
  const [response, setResponse] = useState("none");

  const [inputValue, setInputValue] = useState("");

  const [mostrarCardFiltro, setMostrarCardFiltro] = useState(false);
  const [filtro, setFiltro] = useState({ cidade: "", periodo: "" });

  const clientesAtivos = listaClientes.reduce((acc, valor) => {
    return valor.ativo ? acc + 1 : acc;
  }, 0);

  const NovoEsteMes = listaClientes.reduce((acc, valor) => {
    const date = new Date();
    const [month, year] = [date.getMonth(), date.getFullYear()];
    const dataAtual = new Date(valor.data);
    const [monthAtual, yearAtual] = [
      dataAtual.getMonth(),
      dataAtual.getFullYear(),
    ];
    if (year === yearAtual && month === monthAtual) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

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

  console.log(listaClientes);
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

      setListaClientes((listaClientes) => [...listaClientes, novoCliente]);
      setDadosFormulario(fomularioInicial);
      setResponse("sucesso");
      setMostrarCard(false);
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
              <div className="clientes-Cards">
                <button className="novo-Cliente" onClick={buttonCliente}>
                  + Novo Cliente
                </button>
                <div className="card-indicadores">
                  <div className="cliente-card">
                    <div className="total-Clientes">
                      <h2> Total de Clientes</h2>
                      <div className="cliente-card-valor">
                        <span>{listaClientes.length}</span>
                      </div>
                    </div>
                  </div>

                  <div className="cliente-card">
                    <div className="clientes-Ativos">
                      <h2>Clientes Ativos</h2>
                      <div className="cliente-card-valor">
                        <span>{clientesAtivos}</span>
                      </div>
                    </div>
                  </div>

                  <div className="cliente-card">
                    <div className="clientes-Novos">
                      <h2>Novos este mês</h2>
                      <div className="cliente-card-valor">
                        <span>{NovoEsteMes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {mostrarCard && (
                <div className="modal-cadastro">
                  <div className="card-novo-cliente">
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
                          <option value="Norte do Estado">
                            Norte do Estado
                          </option>
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
                </div>
              )}
            </div>
            <div className="content-Browser">
              <div className="content-intern-browser">
                <div className="browser-Cliente">
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
                            <option value="Norte do Estado">
                              Norte do Estado
                            </option>
                            <option value="Sultado do Estado">
                              Sul do Estado
                            </option>
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

                  {filtrarClientes(
                    filtro.cidade,
                    listaClientes,
                    inputValue,
                  ).map((e) => {
                    return (
                      <div
                        key={e.id}
                        onClick={() => {
                          setClienteSelecionado(e.id);
                        }}
                      >
                        <div className="lista-Clientes-ativos">
                          <span>{e.nomecliente}</span>
                          <span>{e.telefone}</span>
                          <span>{e.veiculo}</span>
                          <span>{e.serviços}</span>
                        </div>
                      </div>
                    );
                  })}
                  <div className="card-lista-clientes-end"></div>
                </div>
              </div>
              {cliente !== undefined && (
                <div className="modal-cliente-selecionado">
                  <div className="card-cliente-selecionado">
                    <div className="card-topo-cliente">
                      <div>
                        <h2>{cliente.nomecliente}</h2>
                        <span>Cliente ativo</span>
                      </div>

                      <div className="acoes-cliente">
                        <button
                          onClick={() => {
                            setMostrarInputs(true);
                            editarCliente();
                          }}
                        >
                          Editar
                        </button>

                        <button
                          onClick={() => {
                            setListaClientes(
                              excluirCliente(listaClientes, cliente.id),
                            );
                          }}
                        >
                          Excluir
                        </button>

                        <button
                          onClick={() => {
                            setClienteSelecionado("");
                          }}
                        >
                          ×
                        </button>
                      </div>
                    </div>

                    <div className="card-dados-cliente">
                      <div>
                        <span>Telefone: </span>
                        <strong>{cliente.telefone}</strong>
                      </div>

                      <div>
                        <span>CPF: </span>
                        <strong>{cliente.cpf}</strong>
                      </div>

                      <div>
                        <span>Cidade: </span>
                        <strong>{cliente.cidade}</strong>
                      </div>

                      <div>
                        <span>Veículo: </span>
                        <strong>{cliente.veiculo}</strong>
                      </div>
                    </div>

                    {mostrarInputs && (
                      <form>
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
                          <option value="Norte do Estado">
                            Norte do Estado
                          </option>
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
                        <button className="buttonSaveEdit" onClick={buttonSaveEdit}>Salvar</button>
                        <button
                          className="buttonSaveEdit"
                          onClick={(e) => {
                            e.preventDefault();
                            setDadosFormulario(fomularioInicial);
                            setMostrarInputs(false);
                          }}
                        >
                          Cancelar
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageCliente;
