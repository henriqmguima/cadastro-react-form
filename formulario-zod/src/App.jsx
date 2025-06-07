import React, { useEffect, useState } from "react";
import FormCadastro from "./components/FormCadastro";
import TabelaDados from "./components/TabelaDados";

function App() {
  const [dados, setDados] = useState(() => {
    // 1. Carrega os dados do localStorage, se existirem
    const armazenados = localStorage.getItem("cadastros");
    return armazenados ? JSON.parse(armazenados) : [];
  });

  const adicionarDado = (novoDado) => {
    setDados((prev) => {
      const atualizados = [...prev, novoDado];
      localStorage.setItem("cadastros", JSON.stringify(atualizados)); // 2. Atualiza localStorage
      return atualizados;
    });
  };

  useEffect(() => {
    localStorage.setItem("cadastros", JSON.stringify(dados));
  }, [dados]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Cadastro de Usuários</h1>
      <FormCadastro onSubmit={adicionarDado} />
      <TabelaDados dados={dados} />
    </div>
  );
}

export default App;
