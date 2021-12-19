import React, {useEffect, useState} from "react";
import CardList from "../../Components/CardList/CardList";
import {getPokeId} from "../../API/parsePokes";
import {catchOrRelease} from "../../API/parsePokes";
import Loader from "../../Components/Loader/Loader";
import Context from "../../context";


function Home() {
    const [myPokes, setMyPokes] = useState( [
        // {name:"b",url:"https://pokeapi.co/api/v2/pokemon/1/"},
        // {name:"i",url:"https://pokeapi.co/api/v2/pokemon/2/"},
        // {name:"v",url:"https://pokeapi.co/api/v2/pokemon/3/"},
        // {name:"ch",url:"https://pokeapi.co/api/v2/pokemon/4/"},
        // {name:"cha",url:"https://pokeapi.co/api/v2/pokemon/5/"},
        // {name:"char",url:"https://pokeapi.co/api/v2/pokemon/6/"},
        // {name:"squi",url:"https://pokeapi.co/api/v2/pokemon/7/"}
    ])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(myPokes => {
                setMyPokes(myPokes.results)
                setLoading(false)
            })
    }, [])

    function catchPokeHome(id) {
        setMyPokes(myPokes.map(poke => {
            if (getPokeId(poke) === id) {
                catchOrRelease(poke)
            }
            return poke
        }))
    }
    function infoAboutPoke(id) {
        console.log(`info about poke No. ${id}`)
    }

    return (
        <Context.Provider value={{catchPokeHome}}>
            <h1>homepage</h1>
            {loading && <Loader/>}
            {myPokes.length ? (
                <CardList pokes={myPokes}/>
            ) : loading ? null : (
                <p>No pokes :(</p>
            )}

        </Context.Provider>
    )
}

export default Home