import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import './style.css'
import { UserContext } from '../context/userContext';

const PokeDetails = (props) => {
    const {pokemon, setPokemon} = useContext(UserContext);
    
    const [erro,setErro] = useState(false);

    const [pokeData, setPokeData] = useState({
        name:"",
        height:"",
        weight:"",
        image:"",
    });

    useEffect( () => {      
        setPokemon(pokemon.toLowerCase())    
        const url =  'https://pokeapi.co/api/v2/pokemon/' + pokemon
            axios.get(url)
                .then((response) =>{
                    const result = response
                    setPokeData({
                        name: result.data.name,
                        height: result.data.height,
                        weight: result.data.weight,
                        image: result.data.sprites.front_default
                    })
                    setErro(false);
                    console.log(pokeData);
                })
                .catch((err) => {
                    setErro(true);
                    console.error("Ops! Não encontrado");
                 });
                
    },[pokemon]);

    return(
        <div className="pokemon">
            {pokemon != 'pokemon' && !erro ? (              
                <div className="poke" >
                    <img src={pokeData.image}></img>
                    <p>Nome: {pokeData.name}</p>
                    {/* <p>Nome: {pokemon}</p> */}
                    <p>Altura: {pokeData.height}</p>
                    <p>Peso: {pokeData.weight}</p>
                </div>
            ):(pokemon != 'pokemon' && erro ? ('Não encontrado'):(''))}

        </div>
    )
}

export default PokeDetails;