import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  idade: z.number().min(18, "Idade mínima é 18").max(99, "Máxima é 99")
});

function FormCadastro({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const enviar = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(enviar)} style={{ marginBottom: "2rem" }}>
      <div>
        <label>Nome:</label><br />
        <input {...register("nome")} />
        {errors.nome && <p style={{ color: "red" }}>{errors.nome.message}</p>}
      </div>

      <div>
        <label>Email:</label><br />
        <input {...register("email")} />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div>
        <label>Idade:</label><br />
        <input type="number" {...register("idade", { valueAsNumber: true })} />
        {errors.idade && <p style={{ color: "red" }}>{errors.idade.message}</p>}
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormCadastro;
