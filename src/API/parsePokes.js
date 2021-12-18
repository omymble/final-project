import {deleteFromStorage} from "./storageFunctions";

function getPokeId(poke) {
    return parseInt(poke.url.slice(34, -1))
}

function pokeIsCaught(poke) {
    return localStorage.hasOwnProperty(getPokeId(poke));
}

function catchOrRelease(poke) {
    (poke.isCaught) ? releasePoke(poke) : catchPoke(poke)
}
function catchPoke(poke) {
    let pokeId = getPokeId(poke).toString()
    poke.isCaught = !poke.isCaught
    let caughtDate = Date()
    localStorage.setItem(pokeId, caughtDate)
}
function releasePoke(poke) {
    let pokeId = getPokeId(poke).toString()
    poke.isCaught = !poke.isCaught
    deleteFromStorage(pokeId)
}

export {getPokeId, pokeIsCaught, catchPoke, releasePoke, catchOrRelease}