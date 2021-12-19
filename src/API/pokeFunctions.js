import {catchPoke, releasePoke} from "./storageFunctions";

function getPokeId(poke) {
    return parseInt(poke.url.slice(34, -1))
}

function pokeIsCaught(poke) {
    return localStorage.hasOwnProperty(getPokeId(poke));
}

function catchOrRelease(poke) {
    (poke.isCaught) ? releasePoke(poke) : catchPoke(poke)
}

function getImgLink(poke) {
    return poke.sprites.other['official-artwork'].front_default
}

export {getPokeId, pokeIsCaught, catchOrRelease, getImgLink}