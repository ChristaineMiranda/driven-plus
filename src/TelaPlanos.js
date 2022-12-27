import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import UsuarioContext from "./contexts/UsuarioContext"
import Opcao from "./Opcao"

export default function TelaPlanos() {
  const [planos, setPlanos] = useState([])
  const { usuario } = useContext(UsuarioContext)

  function sucessoRequisicao(resposta) {
    const novoarray = [...resposta.data]
    setPlanos(novoarray)
  }
  function falhaRequisicao(erro) {
    alert(`Desculpe, não foi possível acessar a lista de planos disponíveis. ${erro.response.data.message}`)
  }

  useEffect(() => {
    const url = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships"
    const requisicao = axios.get(url, usuario.chaveUsuario)
    requisicao.then(sucessoRequisicao)
    requisicao.catch(falhaRequisicao)
  }, [])

  return (
    <Conteudodiv>
      <p>Escolha seu Plano</p>
      {planos.map((item) => <Opcao key={item.id} id={item.id} imagem={item.image} preco={item.price} />)}
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
