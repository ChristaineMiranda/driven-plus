import styled from "styled-components"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useContext } from "react"
import UsuarioContext from "./contexts/UsuarioContext"
import ItemBeneficio from "./ItemBeneficio"
import perfil from "./style/images/perfilVector.png"

export default function TelaHome() {
  const [opcoesPlano, setOpcoesPlano] = useState([])
  const [imagem, setImagem] = useState("")
  const navigate = useNavigate()
  const {usuario} = useContext(UsuarioContext)
  const url = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions"

  function exibirPlano(resposta) {
    const array = [...resposta.data.perks]
    setOpcoesPlano(array)
    setImagem(resposta.data.image)
  }
  function falhaExibirPlano(){
   alert("Não foi possível carregar a página. Faça login novamente")
   navigate("/")
  }

  useEffect(() => {
    const requisicao = axios.get(url, usuario.chaveUsuario)
    requisicao.then(exibirPlano)
    requisicao.catch(falhaExibirPlano)
  }, [])

  function sucessoCancelar() {
    navigate("/subscriptions")
  }

  function cancelarPlano() {
    const requisicao = axios.delete(url, usuario.chaveUsuario)
    requisicao.then(sucessoCancelar)
    requisicao.catch((resposta) => alert(resposta.response.data.message))
  }
  return (
    <TelaHomediv>
      <LogoImg src={imagem} alt="logo" />
      <PerfilImg src={perfil} alt="foto" />
      <Conteudodiv>
        <p>Olá, {usuario.nomeUsuario}</p>      
          {opcoesPlano.map((item) => <ItemBeneficio key={item.id} titulo={item.title} link={item.link} />)}
        
        <BotoesAcoes>
          <BotaoMudarPlano onClick={() => navigate("/subscriptions")}>Mudar plano</BotaoMudarPlano>
          <BotaoCancelar onClick={cancelarPlano}>Cancelar plano</BotaoCancelar>
        </BotoesAcoes>
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
  p{
    margin-bottom: 50px;
    margin-top: 20px;
  }
`
const BotoesAcoes = styled.div`
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
  width: 60px;
  height: 50px;
`