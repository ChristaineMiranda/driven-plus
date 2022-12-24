import logo from "./images/Driven_white 1.png"
export default function TelaLogin(){
    return(
        <div className="telainicial">
            <img className="logo" src={logo} alt="logo"/>
            <input type="text" name="email" placeholder=" E-mail"/>
            <input type="text" name="senha" placeholder = " Senha"/>
            <button className="botao">ENTRAR</button>
            <p className="link">Não possui uma conta? Cadastre-se</p>
        </div>
    )
}