export default function TelaCadastro(){
    return(
        <div className="telainicial">
        <input className="telacadastro-input" type="text" name="nome" placeholder="      Nome"/>
        <input className="telacadastro-input" type="text" name="CPF" placeholder = "     CPF"/>
        <input className="telacadastro-input" type="text" name="email" placeholder="     E-mail"/>
        <input className="telacadastro-input" type="text" name="senha" placeholder = "   Senha"/>
        <button className="botao">CADASTRAR</button>
       
    </div>
    )
}