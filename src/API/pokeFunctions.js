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

// Mon Dec 20 2021 16:30:14 GMT+0300 (Moscow Standard Time)
function getDate(date) {
    let [, month, dateNum] = date.split(' ')
    return `${month} ${dateNum}`
}

export {getPokeId, pokeIsCaught, catchOrRelease, getImgLink, getDate}