
import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from './componentes/Button';


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
        nome: {this.state.nome} <br />
        contador: {this.state.contador}
        <Button press = {this.adicionar}> 
        Maionese 
        </Button> {/* formato  1*/}
          {/* <Button />  1*/} {/*Formato  2 */}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));