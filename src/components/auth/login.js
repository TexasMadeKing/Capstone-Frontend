// I need to incorporate this into my home.js page

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "../../components/auth/login";
import Home from "../pages/home";
import { useEffect, useState } from 'react';

function App() {
    const [loggedIn, setLoggedIn] = useState(false) // Adding state to this functional component
    const [email, setEmail] = useState("")

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home email={email} loggedIn={setLoggedIn}/>} />
                    <Route path="/login" element={<Login setLogIn={setLoggedIn} setEmail={setEmail} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;