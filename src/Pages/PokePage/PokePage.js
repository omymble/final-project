import {useNavigate, useParams} from "react-router";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import {useEffect, useState} from "react";
import {getPokeInfo} from "../../API/serverRequests";
import Loader from "../../Components/Loader/Loader";

const PokePage = () => {
    let navigate = useNavigate()
    const {id} = useParams()
    console.log('Poke page', id)

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
    console.log('Got poke PokePage', poke)
    return (
        <>
            <h1>pokemon's profile No. {id}</h1>
            {loading && <Loader/>}
            {poke ? (
                <>
                    <ProfileCard
                        pokeId={parseInt(id)}
                        // name = {}
                        poke={poke}
                        // key={getPokeId(poke)}
                        // index={index}
                        // onClickCatchButton={onClickCatchButton}
                    />
                    <button
                        onClick={() => {
                            navigate("/")
                        }}
                    >
                        Go home
                    </button>
                </>
            ) : loading ? null : (
                <p>no such poke</p>
            )}
        </>
    )
}

export default PokePage;