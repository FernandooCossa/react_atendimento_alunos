import "./styles.css";
import { Fragment, useState } from "react";

const App = () => {
  const [alunos, setAlunos] = useState(["Ana", "Carlos", "João", "Maria"]);
  const [atendido, setAtendido] = useState("");
  const [nome, setNome] = useState("");

  const novoAluno = (e) => {
    e.preventDefault();
    setAlunos([...alunos, nome]);
    setNome("");
  };

  const novoUrgente = () => {
    setAlunos([nome, ...alunos]);
    setNome("");
  };

  const novoAtender = () => {
    if (!alunos.length) {
      alert("Não há alunos na fila de espera");
      return;
    }
    setAtendido(alunos[0]);
    setAlunos(alunos.slice(1));
    setNome("");
  };

  return (
    <Fragment>
      <h1>Escola de Tecnologia</h1>
      <form onSubmit={novoAluno}>
        <p>
          Aluno:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input type="submit" value="Adicionar" />
          <input
            type="button"
            id="btnUrgencia"
            value="urgência"
            onClick={novoUrgente}
          />
          <input
            type="button"
            id="btnAtender"
            value="Atender"
            onClick={novoAtender}
          />
        </p>
      </form>

      <h3>
        Em Atendimento: <span className="fonte-azul">{atendido}</span>
      </h3>
      <pre>{alunos.map((aluno) => aluno + "\n")}</pre>
    </Fragment>
  );
};

export default App;
