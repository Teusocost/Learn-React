
import React from 'react';
import { render } from 'react-dom';
import Button from './componentes/Button';


class App extends React.Component {
  render() {
    //comentario
    return (
      <div>
        <Button title = "opa" descricao="123"> Maionese </Button> {/* formato  1*/}
        {/* <Button />  1*/} {/*Formato  2 */}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));