import { UserInfos, Info } from "./style";
import PropTypes from 'prop-types';


export default function UserInf(props) {
  return (
    <UserInfos>

      <img src={`http://localhost:3000/uploads/${props.imagem}`} />
      
      <Info>
        <h3>{props.nome}</h3>
      </Info>

      <Info>
        <h3>{props.rm}</h3>
      </Info>

      <Info>
        <h3>{props.curso}</h3>
      </Info>
    
    </UserInfos>
  )
}

UserInf.propTypes = {
  nome: PropTypes.string.isRequired,
  curso: PropTypes.string.isRequired,
  rm: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired
}