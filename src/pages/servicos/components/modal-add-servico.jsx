import { use, useState } from "react";

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

  const enviarDados = function (e) {
    e.preventDefault();

    if (dadosFormularioServico.nomeServico === "" || dadosFormularioServico.precoServico === "") {
      alert("Campo de nome ou preço está Vázio")
    } else {
      const AtivandoServico = {...dadosFormularioServico, ativo: true}
    // envia os dados para pagina pai
    salvarDados(AtivandoServico);
    // reseta os inputs
    setDadosFormularioServico(valorInicialDados)
    alert("Salvo com sucesso")
    }
  };

  return (
    <div className="card-Cadastro-Servico">
      <div className="header-Cadastro-Servico">
        <div className="titulo-and-button">
          <h1>Novo Serviço</h1>
          <button onClick={buttonTeste}>X</button>
        </div>
        <p>Cadastre um serviço oferecido pela empresa</p>
      </div>
      <form className="form-Cadastro-servico" onSubmit={enviarDados}>
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
        <label htmlFor="descricao"> Descrção</label>
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
        <div className="price-servico">
          <div>
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
          <div>
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
        <button type="submit"> Teste</button>
      </form>
    </div>
  );
};

export default ModalServico;
