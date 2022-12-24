import opcao1 from "./images/Group 1.png"
import opcao2 from "./images/Group 2.png"
import opcao3 from "./images/Group 3.png"
import foto from "./images/foto-Vector.png"

export default function TelaHome() {
    return (
        <div className="tela-home">
            <img className="logo-home" src={opcao1} alt="logo" />
            <img className="perfil" src={foto} alt="foto" />
            <div className="acoes">
                <p>Olá, Fulano</p>
                <div className="acoes-botoes">
                <button>Mudar plano</button>
                <button>Cancelar plano</button>
                </div>
            </div>
        </div>
    )
}