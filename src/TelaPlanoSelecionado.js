import logo from "./images/Group 1.png"
import benef from "./images/Vector.png"
import nota from "./images/notaVector.png"

export default function TelaPlanoSelecionado() {
    //condicionar a exibição da caixa de confirmação com um ternário
    return (
        <div className="tela-planoselecionado">
            <div className="selecionado-superior">
                <img src={logo} alt="logo" />
                <p className="titulo">Driven Plus</p>
            </div>
            <div className="descricao">
                <div className="setor">
                    <img src={benef} alt="beneficios" />
                    <span>Benefícios:</span>
                </div>
                <span>1. Brindes exclusivos</span>
                <br />
                <span>2. Materiais bônus de Web</span>

                <div className="setor">
                    <img src={nota} alt="nota" />
                    <span>Preço:</span>
                </div>
                <span>R$ 39,99 cobrados mensalmente</span>

            </div>
            <div className="inputs">

                <input className="telaplanos-input" type="text" name="nome-cartao" placeholder="   Nome impresso no cartão" />
                <input className="telaplanos-input" type="text" name="digitos" placeholder="   Digitos do cartão" />

                <div className="inputs-menores">
                    <input type="text" name="codigo" placeholder="  Código de segurança" />
                    <input type="text" name="validade" placeholder="  Validade" />
                </div>
                <button className="botao">ASSINAR</button>
            </div>
            <div className="tela-alternativa">
                <div className="aparece-por-cima">
                    <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>
                    <div>
                        <button>Não</button>
                        <button>Sim</button>
                    </div>
                </div>
            </div>

        </div>
    )
}