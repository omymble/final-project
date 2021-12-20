import PropTypes from "prop-types";
import {getDate, getImgLink} from "../../API/pokeFunctions";
import {Button, Card} from "react-bootstrap";


function ProfileCard(props) {
    console.log('Profile card', props.poke)
    console.log('abilities', props.poke.abilities)
    let abilities = props.poke.abilities.map(ability => ability.ability.name)
    let types = props.poke.types.map(type => type.type.name)
    let weight = props.poke.weight
    let statusOrDate =
        localStorage.hasOwnProperty(props.pokeId.toString())
            ? getDate(JSON.parse(localStorage.getItem(props.pokeId.toString())).date)
            : 'Not caught'
    let imgSrc = getImgLink(props.poke)


    return (
        <>
            <h2>PokeProfile</h2>
            <p>{props.poke.name}</p>
            <ul>
                {abilities.map((ability, index) => {
                    return <li key={index}>{ability}</li>
                })}
            </ul>
            <ul>
                {types.map((type, index) => {
                    return <li key={index}>{type}</li>
                })}
            </ul>
            <p>{statusOrDate}</p>
            <p>{weight}</p>
            <img src={imgSrc} alt="poke img"/>
        </>
    )
}

ProfileCard.propTypes = {
    poke: PropTypes.object.isRequired
}
// abilities, types, weight. Обратите внимание, что для abilities и для types нам необходимо выводить только поле name.

export default ProfileCard