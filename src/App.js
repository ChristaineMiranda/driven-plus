import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle'
import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaPlanos from './TelaPlanos';
import TelaPlanoSelecionado from './TelaPlanoSelecionado';
import TelaHome from './TelaHome';
import UsuarioContext from "./contexts/UsuarioContext"


function App() {
  const [usuario, setUsuario] = useState({})
  const [logado, setLogado] = useState(false)

  useEffect(()=> {
    let armazenadoLocal = localStorage.getItem("dadosUsuario") 
    if(armazenadoLocal != null){
      armazenadoLocal= JSON.parse(armazenadoLocal) //objeto desserealizado
      setUsuario({nomeUsuario: armazenadoLocal.name, chaveUsuario: armazenadoLocal.token}) //popula o contexto com o que está armazenado localmente
      setLogado(true)    
    }
  },[])

  return (
    <UsuarioContext.Provider value={{usuario, setUsuario}}>
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path='/' element = {<TelaLogin logado={logado}/>} />
        <Route path='/sign-up' element = {<TelaCadastro />} />
        <Route path='/subscriptions' element = {<TelaPlanos />} />
        <Route path='/subscriptions/ID_DO_PLANO/:selecionado' element = {<TelaPlanoSelecionado />} />
        <Route path='/home' element = { <TelaHome />} />             
      </Routes>

    </BrowserRouter>
    </UsuarioContext.Provider>
  );
}

export default App;
