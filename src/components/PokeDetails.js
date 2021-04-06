import React, {useState, useEffect} from  'react'
import axios from 'axios'
import './style.css'

const PokeDetails = (props) => {

    const [pokemon, setPokemon] = useState('wartortle');

    const [pokeData, setPokeData] = useState({
        name:"",
        height:"",
        weight:"",
        image:"",
    });


    useEffect( () => {
        async function fetchData() {
            const url =  'https://pokeapi.co/api/v2/pokemon/' + pokemon
            axios.get(url).then((response) =>{
                const result = response
                setPokeData({
                    name: result.data.name,
                    height: result.data.height,
                    weight: result.data.weight,
                    image: result.data.sprites.front_default
                })
                console.log(pokeData);
            })
        }
        fetchData();
    },[]);

    return(
        <div className="pokemon">
            <img src={pokeData.image}></img>
            <p>Nome: {pokeData.name}</p>
            <p>Altura: {pokeData.height}</p>
            <p>Peso: {pokeData.weight}</p>
        </div>
    )
}

export default PokeDetails;