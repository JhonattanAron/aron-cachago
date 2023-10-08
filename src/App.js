import './App.css';
import AjaxApis from './components/AjaxApis';
import Padre from './components/ComunicacionEntreComponentes';
import MasSobreEventos from './components/MasSobreEventos';
import NavTop from './components/VavTop';
import CicloVida from './components/cicloDeVida.js';

function App() {
  return (
    <>
     <NavTop
      links={['home','acerca','proyectos']}
     /> 
     <MasSobreEventos />
     <Padre />
     <CicloVida />
     <AjaxApis />
    </>
  );
}

export default App;
