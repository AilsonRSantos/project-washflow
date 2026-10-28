import { use, useState } from "react";
import dadosMock from "../../../../date/login";
import "./modal-add-servico.css";

const ModalServico = function ({ buttonTeste, salvarDados }) {
  // Dados Formulário Serviço
  const [dadosFormularioServico, setDadosFormularioServico] = useState({
    nomeServico: "",
    precoServico: "",
    descricaoServico: "",
    tempoEstimadoServico: "",
  });

  const [valorInicialDados, setValorInicialDados] = useState({
    nomeServico: "",
    precoServico: "",
    descricaoServico: "",
    tempoEstimadoServico: "",
  });

  const [dados, setDados] = useState(dadosMock.servicos);

  const enviarDados = function (e) {
    e.preventDefault();

    if (
      dadosFormularioServico.nomeServico === "" ||
      dadosFormularioServico.precoServico === ""
    ) {
      alert("Campo de nome ou preço está Vázio");
    } else {
      let ultimoId = 1;
      if (dados.length !== 0) {
        ultimoId = dados.reduce((novoId, atualId) => {
          if (novoId < atualId.id) {
            novoId = atualId;
          }
          return novoId;
        }, 1);
        ultimoId += 1;
      }
      const AtivandoServico = {
        ...dadosFormularioServico,
        ativo: true,
        id: ultimoId,
      };
      // envia os dados para pagina pai
      salvarDados(AtivandoServico);
      // reseta os inputs
      setDadosFormularioServico(valorInicialDados);
      alert("Salvo com sucesso");
    }
  };

  return (
    <div className="card-Cadastro-Servico">
      <div className="header-Cadastro-Servico">
        <div className="titulo-and-button">
          <h1>Novo Serviço</h1>
          <div className="conteinerButton">
            <button onClick={buttonTeste}>X</button>
          </div>
        </div>
        <p>Cadastre um serviço oferecido pela empresa</p>
      </div>
      <form className="form-Cadastro-servico" onSubmit={enviarDados}>
        <div className="EstiloConteinerInfo">
          <label htmlFor="nome">Nome do serviço</label>
          <input
            value={dadosFormularioServico.nomeServico}
            type="text"
            name="nomeServico"
            id="nome"
            onChange={(e) =>
              setDadosFormularioServico({
                ...dadosFormularioServico,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="EstiloConteinerInfo">
          <label htmlFor="descricao"> Descrição</label>
          <textarea
            value={dadosFormularioServico.descricaoServico}
            name="descricaoServico"
            id="descricao"
            onChange={(e) =>
              setDadosFormularioServico({
                ...dadosFormularioServico,
                [e.target.name]: e.target.value,
              })
            }
          ></textarea>
        </div>
        <div className="price-servico">
          <div className="EstiloConteinerInfo">
            <label htmlFor="preco">Preço</label>
            <input
              type="text"
              value={dadosFormularioServico.precoServico}
              name="precoServico"
              id="preco"
              onChange={(e) =>
                setDadosFormularioServico({
                  ...dadosFormularioServico,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div className="EstiloConteinerInfo">
            <label htmlFor="tempo-Estimado">Duração estimada</label>
            <input
              value={dadosFormularioServico.tempoEstimadoServico}
              type="text"
              name="tempoEstimadoServico"
              id="tempo-Estimado"
              onChange={(e) =>
                setDadosFormularioServico({
                  ...dadosFormularioServico,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
        </div>
        <button type="submit" className="estiloButton">
          {" "}
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default ModalServico;
