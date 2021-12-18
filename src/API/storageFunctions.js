function addToStorage(pokeId) {
    localStorage.setItem(pokeId, 'caught')
}

function deleteFromStorage(pokeId) {
    if (localStorage.hasOwnProperty(pokeId)) {
        localStorage.removeItem(pokeId)
        console.log(pokeId, ' is released')
    } else {
        alert('no such pokemon')
    }
}

function getCaughtPokes() {
    let caughtPokes = []
    for (let i = 0; i < localStorage.length; i++) {
        caughtPokes.push(parseInt(localStorage.key(i)))
    }
    console.log('caught pokes', caughtPokes)
    return caughtPokes
}

export {addToStorage, deleteFromStorage, getCaughtPokes}