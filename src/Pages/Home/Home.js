import React, {useEffect, useState} from "react";
import CardList from "../../Components/CardList/CardList";
import {pokes} from "../../API/pokes";


function Home() {
    return (
        <>
            <h1>homepage</h1>
            <CardList pokes={pokes}/>
        </>
    )
}

export default Home