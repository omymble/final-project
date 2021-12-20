import {useContext} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Button, Card} from "react-bootstrap";
import {getPokeId} from "../../API/pokeFunctions";
import Context from "../../context";

function PokeCard(props) {
    console.log('PokeCard', props.poke)
    return (
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{props.poke.name}</Card.Title>
                <Card.Text>{getPokeId(props.poke)}</Card.Text>
                <Button
                    variant="primary"
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
                    onClick={() => {
                        console.log('INFO ABOUT', props.poke.name, props.poke.isCaught)
                    }}
                >
                    Info
                </Button>
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