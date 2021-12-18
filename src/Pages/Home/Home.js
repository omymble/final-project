import React, {useEffect, useState} from "react";
import CardList from "../../Components/CardList/CardList";
import {getPokeId} from "../../API/parsePokes";
import {catchOrRelease} from "../../API/parsePokes";
import Context from "../../context";


function Home() {
    const [myPokes, setMyPokes] = useState( [
        {name:"bulbasaur",url:"https://pokeapi.co/api/v2/pokemon/1/"},
        {name:"ivysaur",url:"https://pokeapi.co/api/v2/pokemon/2/"},
        {name:"venusaur",url:"https://pokeapi.co/api/v2/pokemon/3/"},
        {name:"charmander",url:"https://pokeapi.co/api/v2/pokemon/4/"},
        {name:"charmeleon",url:"https://pokeapi.co/api/v2/pokemon/5/"},
        {name:"charizard",url:"https://pokeapi.co/api/v2/pokemon/6/"},
        {name:"squirtle",url:"https://pokeapi.co/api/v2/pokemon/7/"}
    ])
    function catchPokeInList(id) {
        setMyPokes(myPokes.map(poke => {
            if (getPokeId(poke) === id) {
                catchOrRelease(poke)
            }
            return poke
        }))
    }

    return (
        <Context.Provider value={{catchPokeInList}}>
            <h1>homepage</h1>
            <CardList pokes={myPokes}/>
        </Context.Provider>
    )
}

export default Home