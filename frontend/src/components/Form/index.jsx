import { useState } from "react";
import { Container } from "./style";

export default function Form() {
  const [nome, setNome] = useState("");
  const [rm, setRm] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/valid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control'": "no-cache"
        },
        body: JSON.stringify({ nome, rm }),
      });

      if (response.ok) {
        setNome("");
        setRm("");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

 return (
  <Container onSubmit={handleSubmit}>
    <label>
      <input 
        type="text" 
        placeholder="Digite seu Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
    </label>
    <label>
      <input 
        type="text" 
        placeholder="Digite seu RM"
        value={rm}
        onChange={(e) => setRm(e.target.value)}
      />
    </label>
    <button type="submit">Enviar</button>
  </Container>
 )
}