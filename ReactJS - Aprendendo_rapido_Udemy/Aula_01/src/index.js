
import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from './componentes/Button';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript


class App extends Component {
  state = {
    contador: 0,
    nome: '',
  }

  ChangeText = (e) => {
    this.setState({
      nome: e.target.value,
    });
  }
  
  
  adicionar = () => {
    this.setState({
      contador: this.state.contador+1
    });
  }


  render() {
    //comentario
    return (
      <div>
        <input onChange={this.ChangeText} />
        <br />
        nome: {this.state.nome}
        <br />
        contatos: {this.state.contador}
        <br />
        <Button press = {this.adicionar}> 
        contador 
        </Button> {/* formato  1*/}
          {/* <Button />  1*/} {/*Formato  2 */}
      </div>
    );
  }
}

root.render(<App tab="home" />);