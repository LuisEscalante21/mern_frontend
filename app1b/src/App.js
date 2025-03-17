import logo from './logo.svg';
import './App.css';
import Alerta from './components/Alerta';
import Accordeon from './components/Accordeon';
import Card from './components/Card';
import Boton from './components/Boton';
import Dropdown from './components/Dropdown';
import Modal from './components/Modal';

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
    <Dropdown />
    <br>
    </br>
    <Modal />
    </>  
  );
}
export default App;
