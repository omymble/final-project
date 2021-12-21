import PropTypes from "prop-types";
import {getDate, getImgLink} from "../../API/pokeFunctions";
import './ProfileCard.css'


function ProfileCard(props) {
    let abilities = props.poke.abilities.map(ability => ability.ability.name)
    let types = props.poke.types.map(type => type.type.name)
    let weight = props.poke.weight
    let statusOrDate =
        localStorage.hasOwnProperty(props.pokeId.toString())
            ? getDate(JSON.parse(localStorage.getItem(props.pokeId.toString())).date)
            : 'Not caught'
    let imgSrc = getImgLink(props.poke)


    return (
        <div className={"container profile-container"}>
            <h2 className={"profile-title"}>{props.poke.name}</h2>
            <div className={"poke-info"}>
                <div className={"abilities"}>
                    <h3 className={"abilities_title"}>Abilities:</h3>
                    <ul className={"abilities_list"}>
                        {abilities.map((ability, index) => {
                            return (
                                <li key={index}
                                    className={"abilities_item"}>
                                    {ability}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={"types"}>
                    <h3 className={"types_title"}>Types:</h3>
                    <ul className={"types_list"}>
                        {types.map((type, index) => {
                            return (
                                <li key={index}
                                    className={"types_item"}>
                                    {type}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <p>{statusOrDate}</p>
                    <p>Weight: {weight}</p>
                </div>
            </div>
            <img className={"poke-image"} src={imgSrc} alt="poke img"/>
        </div>
    )
}

ProfileCard.propTypes = {
    poke: PropTypes.object.isRequired
}
export default ProfileCard