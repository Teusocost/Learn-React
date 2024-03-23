
import React from 'react';
import { render } from 'react-dom';
import Button from './componentes/Button';


class App extends React.Component {
  render() {
    return (
      <h1>
        Hello React!! teste

        <Button> </Button>
      </h1>
    );
  }
}

render(<App />, document.getElementById('app'));