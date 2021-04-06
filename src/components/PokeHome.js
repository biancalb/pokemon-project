import React, {useState} from 'react';
import PokeList from './PokeList.js';
import AddPoke from './AddPoke.js';
import PokeDetails from './PokeDetails.js';
import './style.css'


const PokeHome = () => {

    const [pokes, setPokes] = useState([]);

    const insertPoke = (poke) => {
        poke.id = pokes.length + 1;
        setPokes([...pokes, poke]);
    }

    return(
        <div>
            <div className="navbar">
                Pokemon  API
            </div>
            <div className="flex">
                <div>
                    <AddPoke insertPoke={insertPoke} />    
                    <PokeList poke={pokes} />
                </div>
        
                <div>
                    <PokeDetails />
                </div>

            </div>
        </div>
    )
}

export default PokeHome;