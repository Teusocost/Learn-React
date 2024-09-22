import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App() {

const name = "Maria"
  return (
    <div className="App">
      <HelloWorld />
      <Frase />
      <SayMyName nome= "Mateus" />
      <SayMyName nome= "José" />
      <SayMyName nome= {name} />
      <Pessoa 
        nome="Pedro"
        idade={30}
        foto="https://www.placeholder.com/150"
        profissao= "mecanico" 
      />
      <List />
    
    </div>
  );
}

export default App;
