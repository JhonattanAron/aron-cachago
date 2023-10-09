import React , {useEffect, useState} from "react";

export default function ContadorHooks(props){
    let pokemon = {
        name: 'pokemon',
        sprites: {
            front_default: 'hola',
        }
    }

    const[contador, setContador] = useState(0);
    const[fecthing , setFetching] = useState(pokemon)

    const sumar = ()=> setContador(contador + 1);
    const restar = ()=> setContador(contador - 1);

    useEffect(()=>{
        realizarPeticion()
    } , [])

    const realizarPeticion = async ()=>{
        const peticion = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        const response = (await peticion).json();
        const pokemon = await response;
        setFetching(pokemon)
    }

    return(
        <div className="centerAll">
        <h2>Hooks - useState</h2>
            <h3>{contador}</h3>
            <p>Contador de {props.titulo}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        <h2>Peticion Simple - useState</h2>
        <figure>
            <img src={fecthing.sprites.front_default} alt={fecthing.name} />
            <figcaption>{fecthing.name}</figcaption>
        </figure>
        </div>
    )
}

ContadorHooks.defaultProps = {
    titulo:"Clicks"
}

