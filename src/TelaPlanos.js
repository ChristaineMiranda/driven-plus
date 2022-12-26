import styled from "styled-components"
import opcao1 from "./style/images/Group 1.png"
import opcao2 from "./style/images/Group 2.png"
import opcao3 from "./style/images/Group 3.png"
export default function TelaPlanos() {
    //cada div plano deverá ser um link
    return (
        <Conteudodiv>
            <p>Escolha seu Plano</p>
            <Opcaodiv>
                <img src={opcao1} alt="1" />
                <span >R$ 39,99</span>
            </Opcaodiv>
            <Opcaodiv>
                <img src={opcao2} alt="2" />
                <span >R$ 69,99</span>
            </Opcaodiv>
            <Opcaodiv>
                <img src={opcao3} alt="3" />
                <span >R$ 99,99</span>
            </Opcaodiv>
        </Conteudodiv>

    )
}
const Conteudodiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
p{
      color: #FFFFFF;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
}
`
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