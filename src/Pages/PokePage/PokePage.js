import {useNavigate, useParams} from "react-router";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import {useEffect, useState} from "react";
import {getPokeInfo} from "../../API/serverRequests";
import Loader from "../../Components/Loader/Loader";
import {Button} from "react-bootstrap";
import './PokePage.css'

const PokePage = () => {
    let navigate = useNavigate()
    const {id} = useParams()
    const [poke, setPoke] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPokeInfo(id)
            .then(poke => {
                setPoke(poke)
                setLoading(false)
            })
            .catch(err => console.log('Error GetPokeInfo'))
    }, [])

    return (
        <>
            {loading && <Loader/>}
            {poke ? (
                <div className={"container PokePage-container"}>
                    <ProfileCard
                        pokeId={parseInt(id)}
                        poke={poke}
                    />
                    <Button
                        variant="secondary"
                        size={"lg"}
                        className={""}
                        onClick={() => {navigate("/")}}
                    >
                        Go home
                    </Button>
                </div>
            ) : loading ? null : (
                <p>no such poke</p>
            )}
        </>
    )
}

export default PokePage;