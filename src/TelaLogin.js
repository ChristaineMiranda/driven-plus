import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "./style/images/Driven_white 1.png"


export default function TelaLogin() {
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")

  function falhaLogin(erro){
    alert("Usuário não cadastrado/Dados inválidos!")
  }
  function sucessoLogin(resposta){
    console.log(resposta)
  }

  function entrar() {
    const dados = {email:login, password:senha}
    const enviar = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", dados)
    enviar.then(sucessoLogin)
    enviar.catch(falhaLogin)
  }


  return (
    <Teladiv>
      <img src={logo} alt="logo" />
      <input type="text" name="email" placeholder=" E-mail" value={login} onChange={(event) => (setLogin(event.target.value))} />
      <input type="text" name="senha" placeholder=" Senha" value={senha} onChange={(event) => (setSenha(event.target.value))} />
      <button onClick={entrar} >ENTRAR</button>
      <Link to="/sign-up"><p >Não possui uma conta? Cadastre-se</p></Link> 
    </Teladiv>
  )
}

const Teladiv = styled.div`
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