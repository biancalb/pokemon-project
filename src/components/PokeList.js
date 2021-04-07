import React, {useContext, useState} from 'react';
import { UserContext } from '../context/userContext';

const PokeList = (props)=> {

    const {pokemon, setPokemon} = useContext(UserContext);

    return(
        <div>
            {props.poke.length > 0 ? (
                <ul>
                    {props.poke.map(item => {
                        const {id,name} = item;               
                        return(                       
                            <li key={id}>
                                {name}
                                <button type="submit" onClick={() => setPokemon(name)}>Detalhes</button>
                            </li>)
                    })}
                </ul>
            ) : ("<Empty>")
            }
        </div>
    )
}


export default PokeList;