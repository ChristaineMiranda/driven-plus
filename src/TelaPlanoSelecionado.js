import styled from "styled-components"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import UsuarioContext from "./contexts/UsuarioContext"
import ReactModal from 'react-modal'
import benef from "./style/images/Vector.png"
import nota from "./style/images/notaVector.png"
import seta from "./style/images/setavoltar.png"
import sair from "./style/images/sairVector.png"


export default function TelaPlanoSelecionado() {
    const { selecionado } = useParams()
    const navigate = useNavigate()
    const {usuario} = useContext(UsuarioContext)

    //controle dos inputs
    const [nomeCartao, setNomeCartao] = useState("")
    const [digitosCartao, setDigitosCartao] = useState()
    const [codigo, setCodigo] = useState()
    const [validade, setValidade] = useState("")

    //Controle da renderização do plano escolhido
    const [imagem, setImagem] = useState("")
    const [nome, setNome] = useState("")
    const [beneficios, setBeneficios] = useState([])
    const [preco, setPreco] = useState("")
    const [mostrar, setMostrar] = useState(false)
    const [clicado, setClicado] = useState("")
    

    function sucessoRequisicao(resposta) {
        setImagem(resposta.data.image)
        setNome(resposta.data.name)
        setBeneficios([...resposta.data.perks])
        setPreco(resposta.data.price)

    }
    function falhaRequisicao(resposta) {
        alert("Ocorreu um erro inesperado." + resposta.response.data.message)
    }

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${selecionado}`
        const requisicao = axios.get(url, usuario.chaveUsuario)
        requisicao.then(sucessoRequisicao)
        requisicao.catch(falhaRequisicao)
    }, [])

    function assinarPlano(event) {
        event.preventDefault()
        setMostrar(true)
    }
    function cancelar() {
        setClicado("nao")
        setTimeout(() => {
            setMostrar(false)
            setClicado("")
        }, 500)
    }

    function confirmar() {
        setClicado("sim")
        const url = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions"
        const selecionadoDado = parseInt(selecionado)
        const codigoDado = parseInt(codigo)
        const dados = {
            membershipId: selecionadoDado,
            cardName: nomeCartao,
            cardNumber: digitosCartao,
            securityNumber: codigoDado,
            expirationDate: validade
        }
        const requisicao = axios.post(url, dados, usuario.chaveUsuario)
        requisicao.then(() => navigate("/home"))
        requisicao.catch(falhaRequisicao)
    }

    return (
        <Conteudodiv>
            <SetaVoltar src={seta} onClick={() => navigate("/subscriptions")} />
            <div >
                <img src={imagem} alt="logo" />
                <Titulo>{nome}</Titulo>
            </div>
            <Descricaodiv>
                <div>
                    <img src={benef} alt="beneficios" />
                    <span>Benefícios:</span>
                </div>
                {beneficios.map((item, indice) => <p>{indice + 1}. {item.title}</p>)}
                <div>
                    <img src={nota} alt="nota" />
                    <span>Preço:</span>
                </div>
                <p>R$ {preco} cobrados mensalmente</p>
            </Descricaodiv>
            <Inputsdiv onSubmit={assinarPlano}>
                <input type="text" name="nome-cartao" placeholder="   Nome impresso no cartão" value={nomeCartao} onChange={(event) => (setNomeCartao(event.target.value))} required />
                <input type="text" name="digitos" placeholder="   Digitos do cartão" value={digitosCartao} onChange={(event) => (setDigitosCartao(event.target.value))} required />

                <div>
                    <input type="number" name="codigo" placeholder="  Código de segurança" value={codigo} onChange={(event) => (setCodigo(event.target.value))} required />
                    <input type="text" name="validade" placeholder="  Validade" value={validade} onChange={(event) => (setValidade(event.target.value))} required />
                </div>
                <button type="submit">ASSINAR</button>
            </Inputsdiv>

            <ReactModal isOpen={mostrar} >
                <CaixaConfirmacao clicado={clicado}>
                    <img src={sair} alt="sair" onClick={() => setMostrar(false)} />
                    <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>
                    <div>
                        <button onClick={cancelar}>Não</button>
                        <button onClick={confirmar}>Sim</button>
                    </div>
                </CaixaConfirmacao>
            </ReactModal>

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
p{
    margin-top:3px;
}
div{
  margin-bottom: 10px;
  margin-top: 15px;
  img {
  margin-right: 7px;
}
}
`
const Inputsdiv = styled.form`
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
const SetaVoltar = styled.img`
position: fixed;
top: 18px;
left: 18px;
`
const CaixaConfirmacao = styled.div`
  width: 250px;
  height: 210px;
  background-color: #FFFFFF;
  color: black;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
img{
    position: fixed;
    top:5px;
    right:5px;
    background-color: black;
    
}
div{
  width: 205px;
  display: flex;
  justify-content: space-between;
}
button{
  width: 95px;
  height: 52px;
  border-radius: 10px;
  color: #FFFFFF;
  font-weight: 700;
}
button:nth-child(1){
  border-color: ${props => props.clicado === "nao" ? "#FF4791" : "#CECECE"};
  background-color: ${props => props.clicado === "nao" ? "#FF4791" : "#CECECE"};
}
button:nth-child(2){
  border-color: ${props => props.clicado === "sim" ? "#FF4791" : "#CECECE"};
  background-color: ${props => props.clicado === "sim" ? "#FF4791" : "#CECECE"};
}


`
