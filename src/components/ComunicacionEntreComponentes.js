import { Component } from "react";
import React from "react";

export default class Padre extends Component {

    state = {
        contador: 0,
    }

    incremetarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render() {
        return (
            <>
                <h2>Comunicacion entre components</h2>
                <Hijo mensanje="Mensaje para el Hijo numero 1" />
                <Hijo incremetarContador={this.incremetarContador} mensanje="Mensaje para el Hijo numero 2" />
            </>
        )
    }
}

function Hijo(props) {
    return (
        <>
            <h3>{props.mensanje}</h3>
            <button onClick={props.incremetarContador}>Sumar +</button>
        </>
    )
}