
import React from 'react';
import { render } from 'react-dom';
import Button from './componentes/Button';


class App extends React.Component {
  render() {
    //comentario
    return (
      <h1>
        Hello React!! teste

        <Button> </Button> {/* foramto  1*/}
        <Button /> {/*Formato  2 */}
      </h1>
    );
  }
}

render(<App />, document.getElementById('app'));