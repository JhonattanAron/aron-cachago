import React, { Component } from 'react';

export default class AjaxApis extends Component {

    state = {
        pokemons: [],
    }

    async componentDidMount() {
        try {
            let url = 'https://pokeapi.co/api/v2/pokemon?limit=20'
            const fetching = await fetch(url);
            const dataJson = await fetching.json();
            dataJson.results.map(async el => {
                const fetchPok = await fetch(el.url);
                const pokemonJson = await fetchPok.json()
                let pokemon = {
                    id: pokemonJson.id,
                    name: pokemonJson.name,
                    avatar: pokemonJson.sprites.front_default,
                }
                let pokemons = [...this.state.pokemons, pokemon]
                this.setState({ pokemons: pokemons })
            })

        } catch (error) {
            console.error(`Error al Conectarse al Api \n Error: [ ${error} ]`);
        }

    }


    render() {
        return (
            <div className='centerAll'>
                <h2>Peticiones Asincronas de Apis</h2>
                {this.state.pokemons.length === 0 ? (<h3>Cargando......</h3>) : (
                    this.state.pokemons.map((el , i) => {
                        return (
                            <Pokemon
                                id={`pokemon${i + 1}`}
                                key={i}
                                avatar={el.avatar}
                                name={el.name}
                            />
                        )
                    }))}
            </div>
        )
    }
}

function Pokemon(props) {
    return (
        <figure id={props.id}>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}