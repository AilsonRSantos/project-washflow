import { useState } from "react";
import login from "../../../../date/login";

const ListaServico = function ({ dados, editarLista }) {
  // adiciona novo Serviço a lista de serviços
  const [mostrarButton, setMostrarButton] = useState(false);
  const [servicoId, setServicoId] = useState(0);
  const [mostrarCardEdicao, setMostrarCardEdicao] = useState(false);

  const [dadosFormularioServico, setDadosFormularioServico] = useState({
    nomeServico: "",
    precoServico: "",
    descricaoServico: "",
    tempoEstimadoServico: "",
  });

  const [dadosFormularioServicoIniciais, setDadosFormularioServicoIniciais] =
    useState({
      nomeServico: "",
      precoServico: "",
      descricaoServico: "",
      tempoEstimadoServico: "",
    });

  const ServicoAtualizado = [{ ...dadosFormularioServico, id: servicoId }];

  const SalvarAtualizacaoServico = function (e) {
    e.preventDefault();
    const ServicoAtualizado = {
      ...dadosFormularioServico,
      id: servicoId,
    };
    const edicao = dados.map((x) => {
      if (x.id === servicoId) {
        return ServicoAtualizado;
      } else {
        return x;
      }
    });
    editarLista(edicao);
    setDadosFormularioServico(dadosFormularioServicoIniciais);
    setMostrarCardEdicao(false);
  };

  const excluirServico = function () {
    const excluir = dados.filter((x) => x.id !== servicoId);
    editarLista(excluir);
    setMostrarButton(false)
  };

  const servicoSelecionado = function (id) {
    const servico = dados.find((e) => e.id === id);
    return servico;
  };

  return (
    <div className="lista-servicos-content">
      {mostrarButton && (
        <div className="interactions-servicos">
          <button
          className="estiloButton"
            onClick={() => {
              setMostrarCardEdicao(true);
              setDadosFormularioServico({ ...servicoSelecionado(servicoId) });
            }}
          >
            Editar
          </button>
          <button
          className="estiloButton"
            onClick={() => {
              excluirServico();
            }}
          >
            Excluir
          </button>
        </div>
      )}
      <div className="lista-servicos">
        {dados.map((x) => (
          <div
            className="servico"
            key={x.id}
            onClick={() => {
              setMostrarButton(true);
              setServicoId(x.id);
            }}
          >
            <p>{x.nomeServico}</p>
            <p>{x.precoServico}</p>
            <p>{x.tempoEstimadoServico}</p>
          </div>
        ))}
      </div>

      {mostrarCardEdicao && (
        <div className="inputsEdit">
          <button
            onClick={() => {
              setMostrarCardEdicao(false);
            }}
          >
            X
          </button>
          <form className="formInputs" onSubmit={SalvarAtualizacaoServico}>
            <label htmlFor="nomeServico">Nome Serviço:</label>
            <input
              value={dadosFormularioServico.nomeServico}
              type="text"
              name="nomeServico"
              id="nomeServico"
              onChange={(e) =>
                setDadosFormularioServico({
                  ...dadosFormularioServico,
                  nomeServico: e.target.value,
                })
              }
            />
            <label htmlFor="precoServico">Preço Servico:</label>
            <input
              value={dadosFormularioServico.precoServico}
              type="text"
              name="precoServico"
              id="precoServico"
              onChange={(e) =>
                setDadosFormularioServico({
                  ...dadosFormularioServico,
                  precoServico: e.target.value,
                })
              }
            />
            <label htmlFor="tempoEstimadoServico"> Tempo Estimado:</label>
            <input
              value={dadosFormularioServico.tempoEstimadoServico}
              type="text"
              name="tempoEstimadoServico"
              onChange={(e) =>
                setDadosFormularioServico({
                  ...dadosFormularioServico,
                  tempoEstimadoServico: e.target.value,
                })
              }
            />
            <label htmlFor="descricaoServico"> Descrição Serviço: </label>
            <textarea
              value={dadosFormularioServico.descricaoServico}
              name="descricaoServico"
              id="descricaoServico"
              onChange={(e) =>
                setDadosFormularioServico({
                  ...dadosFormularioServico,
                  descricaoServico: e.target.value,
                })
              }
            ></textarea>
            <button type="submit">Salvar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ListaServico;
