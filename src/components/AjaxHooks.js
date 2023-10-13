import React, { useEffect, useState } from "react";

function Characters({ id, name , image }) {
    return (
        <figure>
            <img className="imgCharacter" src={image} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}
export default function AjaxHooks() {
    const [rikAndMorthy, setRickAndMorthy] = useState([])

    const fetchPokemon = async () => {
        try {
            const url = await 'https://rickandmortyapi.com/api/character'
            const response = await fetch(url)
            const jsonCharacters = await response.json()
            const personajes = await jsonCharacters;
            setRickAndMorthy(personajes.results)
        } catch (error) {
            console.log("Error al Conectar al Api " + error);
        }
    }

    useEffect(() => {
        fetchPokemon()
    }, [])



    return (
        <div className="centerAll">
            <h2>Peticiones Asincronas en Hooks</h2>
            <div className="pokemosCards">
                {rikAndMorthy.length === 0 ? (<h3>Cargando....</h3>) : (
                rikAndMorthy.map((el)=> <Characters key={el.id}  name={el.name} image={el.image} /> ))}
            </div>
        </div>
    )
}