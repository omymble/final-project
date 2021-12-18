import PropTypes from 'prop-types'

import PokeCard from "../Card/PokeCard";

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
                return <PokeCard poke={poke} key={poke.id} index={index}/>
            })}
        </ul>
    )
}

CardList.propTypes = {
    pokes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CardList