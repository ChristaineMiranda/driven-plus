import styled from "styled-components"
import logo from "./style/images/Group 1.png"
import benef from "./style/images/Vector.png"
import nota from "./style/images/notaVector.png"

export default function TelaPlanoSelecionado() {
    //condicionar a exibição da caixa de confirmação com um ternário
    return (
        <Conteudodiv>
            <div >
                <img src={logo} alt="logo" />
                <Titulo>Driven Plus</Titulo>
            </div>
            <Descricaodiv>
                <div>
                    <img src={benef} alt="beneficios" />
                    <span>Benefícios:</span>
                </div>
                <span>1. Brindes exclusivos</span>
                <br />
                <span>2. Materiais bônus de Web</span>

                <div>
                    <img src={nota} alt="nota" />
                    <span>Preço:</span>
                </div>
                <span>R$ 39,99 cobrados mensalmente</span>
            </Descricaodiv>
            <Inputsdiv>

                <input type="text" name="nome-cartao" placeholder="   Nome impresso no cartão" />
                <input type="text" name="digitos" placeholder="   Digitos do cartão" />

                <div>
                    <input type="text" name="codigo" placeholder="  Código de segurança" />
                    <input type="text" name="validade" placeholder="  Validade" />
                </div>
                <button>ASSINAR</button>
            </Inputsdiv>
            {/* <div className="tela-alternativa">
                <div className="aparece-por-cima">
                    <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>
                    <div>
                        <button>Não</button>
                        <button>Sim</button>
                    </div>
                </div>
            </div> */}

        </Conteudodiv>
    )
}

const Conteudodiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    align-items: center;
`
const Titulo = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #FFFFFF;
  margin-top: -1px;
`
const Descricaodiv = styled.div`
margin-left: -50px;

div{
    margin-bottom: 3px;
  margin-top: 15px;
  img {
  margin-right: 7px;
}
}
`
const Inputsdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 34px;
  input{
    border-radius: 8px;
  width: 299px;
  height: 52px;
  margin-bottom: 16px;
  background-color: #FFFFFF;
  border-color: #FFFFFF;
  color: #7E7E7E;
  font-size: 14px;
  }

  div{
  display: flex;
  justify-content: space-between;
  width: 310px;

    input {
        width: 140px;
        height: 50px;
        border-radius: 8px;
        margin-bottom: 16px;
    }
  }  
button{
  width: 298px;
  height: 52px;
  background-color: #FF4791;
  border-color: #FF4791;
  border-radius: 8px;
  font-size: 14px;
  color: #FFFFFF;
  font-weight: 700;
  }
`