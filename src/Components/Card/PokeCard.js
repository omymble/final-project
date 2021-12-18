import PropTypes from "prop-types";
import {Button, Card} from "react-bootstrap";

function PokeCard(props) {
    return (
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{props.poke.name}</Card.Title>
                <Card.Text>{props.poke.id}</Card.Text>
                <Button variant="primary">{(props.poke.caught) ? 'Caught' : 'Catch'}</Button>
            </Card.Body>
        </Card>
    )
}

PokeCard.propTypes = {
    poke: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default PokeCard