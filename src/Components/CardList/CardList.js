import PropTypes from 'prop-types'

import PokeCard from "../Card/PokeCard";
import {getPokeId} from "../../API/parsePokes";
import React, {useState} from "react";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function CardList(props) {

    return (
        <ul /*style={styles.ul}*/>
            {props.pokes.map((poke, index) => {
                poke.isCaught = localStorage.hasOwnProperty(getPokeId(poke).toString());
                return (
                    <PokeCard
                        poke={poke}
                        key={getPokeId(poke)}
                        index={index}
                        // onClick={props.onCatchPoke}
                    />)
            })}
        </ul>
    )
}

CardList.propTypes = {
    pokes: PropTypes.arrayOf(PropTypes.object).isRequired,
    // onCatchPoke: PropTypes.func.isRequired
}

export default CardList