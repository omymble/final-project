import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Button, Card} from "react-bootstrap";
import {getPokeId} from "../../API/pokeFunctions";
import './PokeCard.css'

function PokeCard(props) {
    return (
        <Card border="primary" className={"card"}>
            <Card.Body className="custom-card">
                <Card.Title className={"card-title"}>{props.poke.name}</Card.Title>
                <Card.Text className={"card-text"}>ID: {getPokeId(props.poke)}</Card.Text>
                <div className={"button-container"}>
                    <Button
                        variant="secondary"
                        size={"sm"}
                        className={""}
                        onClick={() => {
                            console.log('CATCH', props.poke)
                            props.onClickCatchButton(getPokeId(props.poke))
                        }}
                    >
                        {(props.poke.isCaught) ? 'Release' : 'Catch'}
                    </Button>
                    <Button
                        as={Link}
                        to={`/profile/${getPokeId(props.poke)}`}
                        variant="primary"
                        size={"sm"}
                        onClick={() => {
                            console.log('INFO ABOUT', props.poke.name, props.poke.isCaught)
                        }}
                    >
                        Info
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

PokeCard.propTypes = {
    poke: PropTypes.object.isRequired,
    index: PropTypes.number,
    onClickCatchButton: PropTypes.func.isRequired
}

export default PokeCard