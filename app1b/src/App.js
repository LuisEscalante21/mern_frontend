import logo from './logo.svg';
import './App.css';
import Alerta from './components/Alerta';
import Accordeon from './components/Accordeon';
import Card from './components/Card';
import Boton from './components/Boton';
import Dropdown from './components/Dropdown';
import Modal from './components/Modal';
import Badges from './components/Badges';
import Tooltips from './components/Tooltips';
import Carousel from './components/Carousel';
import Navs from './components/Navs';
import Popovers from './components/Popovers';
import Spinners from './components/Spinners';
import Progress from './components/Progress';

function App() {
  return (
    <>
    <Alerta />
    <br>
    </br>
    <Accordeon />
    <br>
    </br>
    <Card />
    <br>
    </br>
    <Boton 
    nombre={"Boton 1"}
    color={"rojo"}/>
    <Boton 
    nombre={"Boton 2"}/>
    <br>
    </br>
    <br>
    </br>
    <Dropdown />
    <br>
    </br>
    <Modal />
    <br>
    </br>
    <Badges />
    <br>
    </br>
    <Tooltips />
    <br>
    </br>
    <br>
    </br>
    <Carousel />
    <br>
    </br>
    <br>
    </br>
    <Navs />
    <br>
    </br>
    <Popovers />
    <br>
    </br>
    <br>
    </br>
    <Spinners />
    <br>
    </br>
    <br>
    </br>
    <Progress />
    </>  
  );
}
export default App;
