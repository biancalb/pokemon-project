export async function getPokemon(url) {
    return new Promise((resolve) =>{
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
    })
    
}