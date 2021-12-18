import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import Header from "./Components/Header/Header";
import CardList from "./Components/CardList/CardList";
import Error from "./Pages/Error/Error";
import PokePage from "./Pages/PokePage/PokePage";
import Caught from "./Pages/Caught/Caught";
import './App.css';
import Home from "./Pages/Home/Home";

function App() {
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