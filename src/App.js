import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Error from "./Pages/Error/Error";
import PokePage from "./Pages/PokePage/PokePage";
import Caught from "./Pages/Caught/Caught";
import './App.css';
import Home from "./Pages/Home/Home";
import Context from "./context";
import {getPokeId, catchOrRelease} from "./API/parsePokes";
import {useState} from "react";

function App() {

    // const [myPokes, setMyPokes] = useState( [
    //     {name:"bulbasaur",url:"https://pokeapi.co/api/v2/pokemon/1/"},
    //     {name:"ivysaur",url:"https://pokeapi.co/api/v2/pokemon/2/"},
    //     {name:"venusaur",url:"https://pokeapi.co/api/v2/pokemon/3/"},
    //     {name:"charmander",url:"https://pokeapi.co/api/v2/pokemon/4/"},
    //     {name:"charmeleon",url:"https://pokeapi.co/api/v2/pokemon/5/"},
    //     {name:"charizard",url:"https://pokeapi.co/api/v2/pokemon/6/"},
    //     {name:"squirtle",url:"https://pokeapi.co/api/v2/pokemon/7/"}
    // ])
    // function catchPokeHome(id) {
    //     setMyPokes(myPokes.map(poke => {
    //         if (getPokeId(poke) === id) {
    //             catchOrRelease(poke)
    //         }
    //         return poke
    //     }))
    // }

    return (
        <>
            <Router>
                <Header />
                <div className="App">
                    <h1>PokeApp</h1>
                </div>
                <Routes>
                    <Route exact path="/" element={< Home/>} />
                    <Route exact path="/caught" element={<Caught />} />
                    <Route exact path="/profile/:id" element={<PokePage />} />
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;