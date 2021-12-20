function getPokePortion(offset, limit) {
    return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        .then(response => response.json())
}

function getPokeInfo(pokeId) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
        .then(response => response.json())
}

function getPokeImage(pokeId) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`
}

export {getPokePortion, getPokeInfo, getPokeImage}