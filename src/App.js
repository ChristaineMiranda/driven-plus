import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaPlanos from './TelaPlanos';
import TelaPlanoSelecionado from './TelaPlanoSelecionado';
import TelaHome from './TelaHome';
function App() {
  return (
    <>
    {/* <TelaLogin /> 
    <TelaCadastro/> */}
    {/* <TelaPlanos/> */}       
    {/* <TelaPlanoSelecionado/> */}    
    <TelaHome/>

    </>
  );
}

export default App;
