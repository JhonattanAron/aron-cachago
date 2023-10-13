import './App.css';
import AjaxApis from './components/AjaxApis';
import AjaxHooks from './components/AjaxHooks';
import Padre from './components/ComunicacionEntreComponentes';
import MasSobreEventos from './components/MasSobreEventos';
import NavTop from './components/VavTop';
import CicloVida from './components/cicloDeVida.js';
import ContadorHooks from './components/contadorHooks';

function App() {
  return (
    <>
     <NavTop
      links={['home','acerca','proyectos']}
     />
     <LineaH1 />
     <MasSobreEventos />
     <LineaH1 />
     <Padre />
     <LineaH1 />
     <CicloVida />
     <LineaH1 />
     <AjaxApis />
     <LineaH1 />
     <ContadorHooks />
     <LineaH1 />
     <AjaxHooks />
    </>
  );
}
function LineaH1(){
  return <span className='divisor'></span>
}

export default App;
