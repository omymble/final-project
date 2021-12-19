import PropTypes from 'prop-types'

import PokeCard from "../Card/PokeCard";
import React, {useState, useEffect} from "react";
import {getPokeId, catchOrRelease} from "../../API/pokeFunctions";
import {getPokePortion} from "../../API/serverRequests";
// import {Grid, Row, Col} from "react-bootstrap";
import Loader from "../Loader/Loader";
import Context from "../../context";


function CardList() {
    const [pokes, setPokes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPokePortion()
            .then(pokes => {
                setPokes(pokes.results)
                setLoading(false)
            })
            .catch(err => console.log('Error GetPokePortion'))
    }, [])

    function onClickCatchButton(id) {
        setPokes(pokes.map(poke => {
            if (getPokeId(poke) === id) {
                catchOrRelease(poke)
            }
            return poke
        }))
    }

    return (
        <>
            <h1>pokelist</h1>
            {loading && <Loader/>}
            {pokes.length ? (
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
            ) : loading ? null : (
                <p>No pokes :(</p>
            )}
        </>

/*        <ul>
            {pokes.map((poke, index) => {
                poke.isCaught = localStorage.hasOwnProperty(getPokeId(poke).toString());
                return (
                    <PokeCard
                        poke={poke}
                        key={getPokeId(poke)}
                        index={index}
                    />)
            })}
        </ul>*/
    )
}

CardList.propTypes = {
    // pokes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CardList