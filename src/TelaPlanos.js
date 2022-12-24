import opcao1 from "./images/Group 1.png"
import opcao2 from "./images/Group 2.png"
import opcao3 from"./images/Group 3.png"
export default function TelaPlanos(){
    //cada div plano deverá ser um link
    return(
        <div className="telainicial">
            <p className="escolha">Escolha seu Plano</p>
            <div className="opcao-plano">
                <img className="image" src={opcao1} alt="1"/>
                <span className="preco-plano">R$ 39,99</span>
            </div>
            <div className="opcao-plano">
                <img className="image" src={opcao2} alt="2"/>
                <span className="preco-plano">R$ 69,99</span>
            </div>
            <div className="opcao-plano">
                <img className="image" src={opcao3} alt="3"/>
                <span className="preco-plano">R$ 99,99</span>
            </div>
        </div>
        
    )
}