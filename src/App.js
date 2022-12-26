import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle'
import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaPlanos from './TelaPlanos';
import TelaPlanoSelecionado from './TelaPlanoSelecionado';
import TelaHome from './TelaHome';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path='/' element = {<TelaLogin/>} />
        <Route path='/sign-up' element = {<TelaCadastro />} />
        <Route path='/subscriptions/ID_DO_PLANO' element = {<TelaPlanoSelecionado />} />
        <Route path='/subscriptions' element = {<TelaPlanos />} />
        <Route path='/home' element = { <TelaHome />} />             
      </Routes>

    </BrowserRouter>
  );
}

export default App;
