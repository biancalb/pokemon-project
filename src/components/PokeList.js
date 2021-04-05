import React from 'react';

const PokeList = (props)=> {

    return(
        <div>
            <h3>Items</h3>
            {props.poke.length > 0 ? (
                <table>
                    <tbody>
                    {props.poke.map(item => {
                    const {id,name} = item;
                        return(            
                            <tr key={id}>
                                <td>
                                    <ul>
                                        <li >{name} </li>
                                    </ul>
                                </td>
                                <td><button type="submit">Details</button></td>
                            </tr>                                                  
                        )
                    })}
                    </tbody>
                </table>
            ) : ("Empty")
            }
        </div>
    )
}


export default PokeList;