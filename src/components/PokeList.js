import React from 'react';

const PokeList = (props)=> {

    return(
        <div>
            {props.poke.length > 0 ? (
                <ul>
                    {props.poke.map(item => {
                        const {id,name} = item;               
                        return(                       
                            <li key={id}>
                                {name}
                                <button type="submit">Detalhes</button>
                            </li>)
                    })}
                </ul>
            ) : ("<Empty>")
            }
        </div>
    )
}


export default PokeList;