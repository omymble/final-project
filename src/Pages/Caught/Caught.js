import React, {useEffect, useState} from "react";
import {caughtPokes} from "../../API/storageFunctions";
import {catchOrRelease, getPokeId} from "../../API/pokeFunctions";
import {getPokePortion} from "../../API/serverRequests";
import PokeCard from "../../Components/Card/PokeCard";

function Caught() {
    const [pokes, setPokes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setPokes(caughtPokes())
    }, [])

    function onClickCatchButton(id) {
        setPokes(pokes.map(poke => {
            if (getPokeId(poke) === id) {
                catchOrRelease(poke)
            }
            return poke
        }).filter(poke => {
            return getPokeId(poke) !== id
        }))
    }

    return (
        <>
            <h1>caught pokemons</h1>
            {pokes.length ? (
                <ul>
                    {pokes.map((poke, index) => {
                        // poke.isCaught = localStorage.hasOwnProperty(getPokeId(poke).toString());
                        return (
                            <PokeCard
                                poke={poke}
                                key={getPokeId(poke)}
                                index={index}
                                onClickCatchButton={onClickCatchButton}
                            />)
                    })}
                </ul>
            ) : loading ? null : (
                <p>No pokes :(</p>
            )}
        </>
    )
}

export default Caught