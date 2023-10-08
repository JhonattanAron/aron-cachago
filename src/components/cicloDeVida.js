import React, { Component } from "react";

class Relog extends Component{
    constructor(props){
        super(props)
        console.log('Props Cargadas');
    }

    componentWillUnmount(){
        console.log(5 , "El componente ya no existe");
    }

    render(){
        return(
            <h3>{this.props.hora}</h3>
        )
    }
}

export default class CicloVida extends Component {
    constructor(porps) {
        super(porps)
        console.log(0,"El componente se inizializa OJO aun no esta en el DOM");

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible:false,
        }

        this.temporizador = null;
    }

    inicarRelog = () => {
        this.tictac();
        this.setState({
            visible:true,
        })
    }
    detenerRelog = () => {
        clearInterval(this.temporizador)
        this.setState({
            visible:false,
        })
    }
    tictac = () =>{
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    componentDidMount(){
        console.log(1 , "El componente ya se encuentra en el DOM");
    }
    componentDidUpdate(prevProps , prevState){
        console.log(2, 'El estado o las props del componete an cambiado ');
        console.log(prevProps);
        console.log(prevState);
    }
    componentWillUnmount(){
        console.log(3, 'El componente a sido eliminado del DOM');
    }

    render() {
        console.log(4, 'El componente renderiza');
        return (
            <>
                <h1>Ciclo de Vida del Componente</h1>
                {this.state.visible && <Relog hora={this.state.hora} />}
                <button onClick={this.inicarRelog}>Iniciar</button>
                <button onClick={this.detenerRelog}>Detener</button>
            </>

        )
    }
}
