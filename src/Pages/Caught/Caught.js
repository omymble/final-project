import React, {useEffect, useState} from "react";
import {caughtPokes} from "../../API/storageFunctions";
import {catchOrRelease, getPokeId} from "../../API/pokeFunctions";
import PokeCard from "../../Components/Card/PokeCard";
import './Caught.css'

function Caught() {
    const [pokes, setPokes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setPokes(caughtPokes())
        setLoading(false)
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
            {pokes.length ? (
                <div className={"list-container"}>
                    <ul>
                        {pokes.map((poke, index) => {
                            return (
                                <PokeCard
                                    poke={poke}
                                    key={getPokeId(poke)}
                                    index={index}
                                    onClickCatchButton={onClickCatchButton}
                                />)
                        })}
                    </ul>
                </div>
            ) : loading ? null : (
                <p>No pokes :(</p>
            )}
        </>
    )
}

export default Caught