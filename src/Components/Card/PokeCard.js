import {useContext} from "react";
import PropTypes from "prop-types";
import {Button, Card} from "react-bootstrap";
import {getPokeId} from "../../API/pokeFunctions";
import Context from "../../context";

function PokeCard(props) {
    // const {onClickCatchButton} = useContext(Context)
    // const {infoAboutPoke} = useContext(Context)
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
                    href='/profile/:'
                    variant="primary"
                    onClick={() => console.log(`info about ${getPokeId(props.poke)}`)}
                >
                    info
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