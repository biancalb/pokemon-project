import React, {useState} from 'react';

const AddPoke = props => {

     const initialPokeState = {
        id:'',
        name:'',
    }

    const [pokes, setPokes] = useState(initialPokeState);

    const handleChange = e => {
        const {name, value} = e.target;
        setPokes({...pokes, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!pokes.name || !pokes.id) {
            props.insertPoke(pokes)
            setPokes(initialPokeState)
        }
    }

    return(
        <div>
            <h3>Add item</h3>
            <form>

                <label>Nome do Pokemon: </label>
                <input 
                    type="text"
                    name="name"
                    value={pokes.name}
                    onChange={handleChange}
                />
                
                <button type="submit" onClick={handleSubmit} >Adicionar</button>

            </form>
            <br/>
        </div>
    )
}

export default AddPoke;