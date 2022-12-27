import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from './style/GlobalStyle'
import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaPlanos from './TelaPlanos';
import TelaPlanoSelecionado from './TelaPlanoSelecionado';
import TelaHome from './TelaHome';

function App() {
  const [token, setToken] = useState("")
 
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path='/' element = {<TelaLogin setToken={setToken}/>} />
        <Route path='/sign-up' element = {<TelaCadastro />} />
        <Route path='/subscriptions' element = {<TelaPlanos token={token}/>} />
        {/* ROTA COM PARAMETRO = plano selecionado na componente PLANOS*/}
        <Route path='/subscriptions/ID_DO_PLANO/:selecionado' element = {<TelaPlanoSelecionado />} />
        <Route path='/home' element = { <TelaHome />} />             
      </Routes>

    </BrowserRouter>
  );
}

export default App;
