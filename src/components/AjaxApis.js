import React, { Component } from 'react';

export default class AjaxApis extends Component {

    state = {
        pokemons: [],
    }

    componentDidMount() {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=20'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.results.forEach(el => {
                    fetch(el.url)
                        .then(json => json.json())
                        .then(data => {
                            let pokemon = {
                                id: data.id,
                                name: data.name,
                                avatar: data.sprites.front_default,
                            }
                            let pokemons = [...this.state.pokemons, pokemon]
                            this.setState({ pokemons: pokemons })
                        })
                });
            })
            .catch(err => console.error("Error al conectarse al API" + err))
    }



    render() {
        return (
            <>
                <h2>Peticiones Asincronas de Apis</h2>
                {this.state.pokemons.length === 0 ? (<h3>Cargando......</h3>) : (
                    this.state.pokemons.map(el => {
                        return (
                            <Pokemon
                                key={el.id}
                                 avatar={el.avatar}
                                name={el.name}
                            />
                        )
                    }))}
            </>
        )
    }
}

function Pokemon(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}