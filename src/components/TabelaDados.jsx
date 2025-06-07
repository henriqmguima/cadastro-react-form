import React from "react";

function TabelaDados({ dados }) {
  if (dados.length === 0) return <p>Nenhum dado cadastrado ainda.</p>;

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <tr key={index}>
            <td>{item.nome}</td>
            <td>{item.email}</td>
            <td>{item.idade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaDados;
