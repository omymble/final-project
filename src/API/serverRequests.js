function getPokePortion() {
    return fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        /*.then(myPokes => {
            setMyPokes(myPokes.results)
            setLoading(false)
        })*/
}

function getPokeInfo(pokeId) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
        .then(response => response.json())
}

function getPokeImage(pokeId) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`
}

export {getPokePortion, getPokeInfo, getPokeImage}