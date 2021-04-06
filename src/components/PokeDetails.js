import React, {useState, useEffect} from  'react'
import axios from 'axios'
import {getPokemon} from '../services/PokeServices.js'

const PokeDetails = (props) => {

    const [pokeData, setPokeData] = useState([]);

    useEffect( () => {
        async function fetchData() {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
            await loadingPokemon(response.data.results)
            return response;
        }
        fetchData();
    },[]);

    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map (async pokemon =>{
            let pokemonRecord = await getPokemon (pokemon.url);
            return pokemonRecord;
        }))

        setPokeData(_pokemonData)
    }

    return(
        <div>
        {pokeData.map((pokemon,i) => {                            
            const{name, weight,height, sprites} = pokemon;
            return(
                <div key={i} className="pokemon">
                    <img src={sprites.front_default} alt={name}></img>
                    <p>Nome: {name} </p> 
                    <p>Peso: {weight}</p>
                    <p>Altura: {height}</p>
                </div>
            )
        })}
    </div>
    )
}

export default PokeDetails;