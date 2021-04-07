import React, {useState} from 'react';
import PokeList from './PokeList.js';
import AddPoke from './AddPoke.js';
import PokeDetails from './PokeDetails.js';
import './style.css'
import { UserContext } from '../context/userContext.js';


const PokeHome = () => {

    const [pokes, setPokes] = useState([]);

    const insertPoke = (poke) => {
        poke.id = pokes.length + 1;
        setPokes([...pokes, poke]);
    }

    const [pokemon, setPokemon] = useState('pokemon');

    return(
        <div>
            <div className="navbar">
                Pokemon  API
            </div>
            <UserContext.Provider value={{pokemon, setPokemon}}>
                <div className="flex">
                    <div>
                        <AddPoke insertPoke={insertPoke} />    
                        <PokeList poke={pokes} />
                    </div>
            
                    <div>
                        <PokeDetails />
                    </div>

                </div>
            </UserContext.Provider>
        </div>
    )
}

export default PokeHome;