import React, { Component } from "react";

const Button = (props) => {
    
    /*UNSAFE_componentWillMount(){
        console.log('componentWillMount');
      }
    
    componentDidMount(){
        console.log('componentDidMount');
    }
    
    render(){
        console.log('render')
        
        return (
            <button onClick={this.props.press}> {this.props.children} </button>
            );
    */

            return (
                <button onClick={props.press}> {props.children} </button>
            );    
}


export default Button; //Dessa maneira não é ncessário colocar as chaves no index principal