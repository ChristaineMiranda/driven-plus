import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "./style/images/Driven_white 1.png"


export default function TelaLogin(props) {
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const navigate = useNavigate()
  const {setToken}= props

  function falhaLogin(erro) {
    alert(erro.response.data.message)
  }
  
  function sucessoLogin(resposta) {
    setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIxMywiaWF0IjoxNjcyMDcxMzU1fQ.8feSbIHqIpkIU1L6VWXzM1tQTbjDXh27nJMyDNgtWq0")

    console.log(resposta.data)
    const plano = resposta.data.membership
    //Se usuário não tem um plano
    if(plano === null){
      navigate("/subscriptions")
    }

    //Se usuário tem um plano
    else{
      navigate("/home")
    }
  
  }

  function entrar(event) {
    event.preventDefault()
    const dados = { email: login, password: senha }
    const enviar = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", dados)
    enviar.then(sucessoLogin)
    enviar.catch(falhaLogin)
  }


  return (
    <Teladiv onSubmit={entrar}>
      <img src={logo} alt="logo" />
      <input type="email" name="email" placeholder=" E-mail" value={login} onChange={(event) => (setLogin(event.target.value))} required/>
      <input type="password" name="senha" placeholder=" Senha" value={senha} onChange={(event) => (setSenha(event.target.value))} required/>
      <button type="submit">ENTRAR</button>
      <Link to="/sign-up"><p >Não possui uma conta? Cadastre-se</p></Link>
    </Teladiv>
  )
}

const Teladiv = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  img{
    margin-bottom: 90px;
  width: 299px;
  height: 49px;
  margin-top: 134px;
  }
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
  button{
  width: 298px;
  height: 52px;
  background-color: #FF4791;
  border-color: #FF4791;
  border-radius: 8px;
  font-size: 14px;
  color: #FFFFFF;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 15px;
  }
  p{
    color: #FFFFFF;
  text-decoration: underline;
  }
`