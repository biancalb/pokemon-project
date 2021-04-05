import React, {useState} from 'react';
import PokeList from './PokeList.js';
import AddPoke from './AddPoke.js';

const PokeHome = () => {

    const [pokes, setPokes] = useState([]);

    const insertPoke = (poke) => {
        poke.id = pokes.length + 1;
        setPokes([...pokes, poke]);
    }

    return(
        <div>
            <AddPoke insertPoke={insertPoke} />    
            <hr/>
            <PokeList poke={pokes} />    
        </div>
    )
}

export default PokeHome;