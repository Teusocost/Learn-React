import React, { Component } from "react";
import PropTypes from 'prop-types'
class Button extends Component {
    static defaultProps = {
        title: 'Comportmaento padrao',
        descricao : 'descricao default'
    }

    static PropTypes = { //isso obriga os botoes a ter o tipo title
        title: PropTypes.string.isRequired
    }
    render(){

        return (
            <div>
                {this.props.title} - {this.props.descricao}
                <button>{this.props.children}</button>
            </div>
        );
    }
}


export default Button; //Dessa maneira não é ncessário colocar as chaves no index principal