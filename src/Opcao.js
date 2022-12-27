import styled from "styled-components"
import { Link } from "react-router-dom"
export default function Opcao(props) {
  const { id, imagem, preco } = props
  return (
    <Link to={`/subscriptions/ID_DO_PLANO/${id}`}>
      <Opcaodiv>
        <img src={imagem} alt="imagem" />
        <span >{`R$${preco}`}</span>
      </Opcaodiv>
    </Link>
  )
}

const Opcaodiv = styled.div`
  padding: 42px 16px;
  border-color: #7E7E7E;
  border-width: 2px;
  border-style: solid;
  border-radius: 12px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  img{
    margin-right: 20px;
  }
  span{
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 700;
  }
`