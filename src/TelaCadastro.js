import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function TelaCadastro() {
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState()
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const navigate = useNavigate()

  function falhaCadastro(erro) {
    console.log(erro.response.data)
    alert(erro.response.data.message)
  }
  function sucessoCadastro() {
    //REDIRECIONAR PARA TELA DE LOGIN
    alert("Cadatro realizado com sucesso!")
    navigate("/")
  }
  function cadastrar(event) {
    event.preventDefault()
    const dadosCadastrais = {
      email: email,
      name: nome,
      cpf: cpf,
      password: senha
    }
    console.log(dadosCadastrais)
    const enviarCadastro = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", dadosCadastrais)
    enviarCadastro.then(sucessoCadastro)
    enviarCadastro.catch(falhaCadastro)

  }

  return (
    <Conteudodiv onSubmit={cadastrar}>
      <input type="text" name="nome" placeholder="      Nome" value={nome} onChange={(event) => (setNome(event.target.value))} required />
      <input type="number" name="CPF" placeholder="     CPF" value={cpf} onChange={(event) => (setCpf(event.target.value))} required />
      <input type="email" name="email" placeholder="     E-mail" value={email} onChange={(event) => (setEmail(event.target.value))} required />
      <input type="password" name="senha" placeholder="   Senha" value={senha} onChange={(event) => (setSenha(event.target.value))} required />
      <button type="submit">CADASTRAR</button>
      <Link to="/"><p>Já possui uma conta? Entre</p></Link>

    </Conteudodiv>
  )
}


const Conteudodiv = styled.form`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

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
  margin-bottom: 8px;
  }
  p{
    text-decoration: underline;
    color: #FFFFFF;
  }

`