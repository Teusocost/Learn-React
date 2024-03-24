import React, { Component } from "react";
import Button from "./component/Button";
import { Link } from "react-router-dom";

class App extends Component {

    state = {
        personagens: []
    }

    async componentDidMount() {
        try {

            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            const dataJson = await response.json();

            this.setState({ personagens: dataJson.results });
            }
            catch (error) {
            console.log(error);
            }
    }

    render(){
        return(
              <div >
                {
                    this.state.personagens.map(personagem => {
                        return (
                            <div key={personagem.name}>
                                {personagem.name}
                            </div>
                        );
                    })
                }
              </div>
        );
    }
}

export default App;
