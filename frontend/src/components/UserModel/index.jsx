import { useState } from "react";
import { Container } from "./styles";

import UserInf from "../Userinfos";
import Form from "../Form";


export default function UserModel() {
  const [isLogged, setIsLogged] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const [infos, setInfos] = useState({});
  const [hasError, setHasError] = useState(false);
  

  async function handleClick (){
    setIsLogged(true);
    setShowButton(false);

    try {
      const fingerprintAluno = await fetch('http://localhost:3000/arduino/', {
        headers: {
          'Cache-Control': 'no-cache'
        }
      })
      
      const finger = await fingerprintAluno.json();
      const response = await fetch(`http://localhost:3000/alunos/${finger}`);

      if (!response.ok) {
        setHasError(true);
        return;
      }

      const user = await response.json();
      setInfos(user)
    } catch (error) {
      console.log(error)
      setHasError(true)
    }
  }

  return (
    <Container>
      {showButton && <button onClick={handleClick}>Validar</button>}
      {isLogged && !hasError && (
        <UserInf
          imagem={infos.imagem}
          nome={infos.nome}
          rm={infos.rm}
          curso={infos.curso}
        />
      )}
      {hasError && <Form />} {/* Renderiza o componente Form apenas se houver erro */}
    </Container>
  )
}

