import {getPokeId} from "./pokeFunctions";

function addToStorage(pokeId, obj) {
    localStorage.setItem(pokeId, JSON.stringify(obj))
}

function deleteFromStorage(pokeId) {
    if (localStorage.hasOwnProperty(pokeId)) {
        localStorage.removeItem(pokeId)
        console.log(pokeId, ' is released')
    } else {
        alert('no such pokemon')
    }
}

function catchPoke(poke) {
    let pokeId = getPokeId(poke)
    poke.id = pokeId
    poke.isCaught = !poke.isCaught
    poke.date = Date()
    console.log('you caught ', poke)
    addToStorage(pokeId.toString(), poke)
}

function releasePoke(poke) {
    let pokeId = getPokeId(poke)
    poke.isCaught = !poke.isCaught
    delete poke.date
    console.log('you released ', poke)
    deleteFromStorage(pokeId.toString())
}

function caughtPokes() {
    let caughtPokes = []
    for (let i = 0; i < localStorage.length; i++) {
        caughtPokes.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    console.log('caught pokes', caughtPokes)
    return caughtPokes
}

export {addToStorage, deleteFromStorage, caughtPokes, catchPoke, releasePoke}