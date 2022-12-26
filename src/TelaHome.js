import styled from "styled-components"
import opcao1 from "./style/images/Group 1.png"
import opcao2 from "./style/images/Group 2.png"
import opcao3 from "./style/images/Group 3.png"
import foto from "./style/images/foto-Vector.png"

export default function TelaHome() {
    return (
        <TelaHomediv>
            <LogoImg src={opcao1} alt="logo" />
            <PerfilImg src={foto} alt="foto" />
            <Conteudodiv>
                <p>Olá, Fulano</p>
                <div>
                <BotaoMudarPlano>Mudar plano</BotaoMudarPlano>
                <BotaoCancelar>Cancelar plano</BotaoCancelar>
                </div>
            </Conteudodiv>
        </TelaHomediv>
    )
}

const TelaHomediv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  `

  const Conteudodiv = styled.div`
  width: 300px;
  height: 100vh; 
  margin-top: 130px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  div{
    display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 12px;
  width: 300px;
  button{
  width: 299px;
  height: 52px;
  border-radius: 8px;
  color: #FFFFFF;
  }
  }
`
const BotaoMudarPlano = styled.button`
background-color: #FF4791;
  border-color: #FF4791;
`
const BotaoCancelar = styled.button`
  background-color: #FF4747;
  border-color: #FF4747;
  margin-top: 5px;
`
const PerfilImg = styled.img`
  position: fixed;
  top: 22px;
  right: 22px;
  z-index: 10;
`
const LogoImg = styled.img`
  position: fixed;
  top: 22px;
  left: 22px;
`