import PropTypes from 'prop-types'

import PokeCard from "../Card/PokeCard";
import React, {useState, useEffect} from "react";
import {getPokeId, catchOrRelease} from "../../API/pokeFunctions";
import {getPokePortion} from "../../API/serverRequests";
import {Button, Grid, Row, Col} from "react-bootstrap";
import Loader from "../Loader/Loader";


function CardList() {
    const [pokes, setPokes] = useState([])
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(true)

    function onClickCatchButton(id) {
        setPokes(pokes.map(poke => {
            if (getPokeId(poke) === id) {
                catchOrRelease(poke)
            }
            return poke
        }))
    }

    function onClickLoadingButton() {
        setOffset(offset + 1)
    }

    useEffect(() => {
        let limit = 30
        let portion = limit * offset
        getPokePortion(portion, limit)
            .then(pokePortion => {
                setPokes([...pokes, ...pokePortion.results])
                setLoading(false)
            })
            .catch(err => console.log('Error GetPokePortion'))
    }, [offset])

    return (
        <>
            <h1>pokelist</h1>
            {loading && <Loader/>}
            {pokes.length ? (
                <>
                    <ul>
                        {pokes.map((poke, index) => {
                            poke.isCaught = localStorage.hasOwnProperty(getPokeId(poke).toString());
                            return (
                                <PokeCard
                                    poke={poke}
                                    key={getPokeId(poke)}
                                    index={index}
                                    onClickCatchButton={onClickCatchButton}
                                />)
                        })}
                    </ul>
                    <Button
                        onClick={onClickLoadingButton}
                        variant="secondary"
                    >
                        Load more
                    </Button>
                </>
            ) : loading ? null : (
                <p>No pokes :(</p>
            )}
        </>
    )
}

export default CardList