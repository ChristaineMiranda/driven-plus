import styled from "styled-components"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import foto from "./style/images/foto-Vector.png"

export default function TelaHome() {
  const [opcoesPlano, setOpcoesPlano] = useState([])
  const [imagem, setImagem] = useState("")
  const navigate = useNavigate()
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIxMywiaWF0IjoxNjcyMDcxMzU1fQ.8feSbIHqIpkIU1L6VWXzM1tQTbjDXh27nJMyDNgtWq0"
  const tokenFinal = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }
  const url = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions"

  function exibirPlano(resposta){
    const array = [...resposta.data.perks]
    setOpcoesPlano(array)
    setImagem(resposta.data.image)
  }

  useEffect(()=>{
    const requisicao = axios.get(url, tokenFinal)
    console.log("resposta")
    requisicao.then(exibirPlano)
    requisicao.catch((resposta) => alert(resposta.response.data.message))
  },[])

  function sucessoCancelar(){
   navigate("/subscriptions")
  }

  function cancelarPlano(){
    const requisicao = axios.delete(url, tokenFinal)
    requisicao.then(sucessoCancelar)
    requisicao.catch((resposta)=> alert(resposta.response.data.message))
  }
    return (
        <TelaHomediv>
            <LogoImg src="quebrado" alt="logo" />
            <PerfilImg src={imagem} alt="foto" />
            <Conteudodiv>
                <p>Olá, Fulano</p>
                {opcoesPlano.map((item) => <p>{item.title}</p>)}
                <div>
                <BotaoMudarPlano onClick={()=> navigate("/subscriptions")}>Mudar plano</BotaoMudarPlano>
                <BotaoCancelar onClick={cancelarPlano}>Cancelar plano</BotaoCancelar>
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