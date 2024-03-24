import React from "react";
import Button from "./component/Button";
import { Link } from "react-router-dom";

function App() {
  return(

        <div >
        <Button>
        Salvar
        </Button>

        <Link to = "/personagem/1">
            Personagem
        </Link>

        </div>
  );
}

export default App;
