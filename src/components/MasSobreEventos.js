import React, { Component } from "react";


export default class MasSobreEventos extends Component{

    loggedIn = true;

    handleClick = (e) =>{
        console.log(e);
        console.log(e.target);
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.target);
    }
    handleClickConParam = (nombre)=>{
        console.log(`hola ${nombre}`);
    }
    BotonE = (props) =>{
        return <button onClick={props.myOnClick}>Boton echo vARIABLE</button>
    }

    render(){
        return(
            <div style={{padding: "45px"}}>
                {/*Renderizado Condicional*/}
                {this.loggedIn ? (<h3>Bienvenido Usuario Autenticado</h3>) : (<h3>El usuario aun no a entrado</h3>)}
                <button onClick={this.handleClick}>Event</button>
                {/*Si se nesesita un Parametro*/}
                <button onClick={()=>{
                    this.handleClickConParam("Aron")
                }}>Saludar</button>
                {/*Evento Personalizado enviado a Paramas*/}
                <Boton myOnClick={this.handleClick}></Boton>
                <this.BotonE myOnClick={()=>{
                    this.handleClickConParam("Jose Jose")
                }}></this.BotonE>
            </div>
        )
    }
}

function Boton(props){
    return <button onClick={props.myOnClick}>Boton echo Componente</button>
}