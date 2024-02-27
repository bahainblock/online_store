import React from 'react';
import './App.css';
import HeaderBar from "./Components/HeaderBar/HeaderBar";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

function App() {
    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>
            <HeaderBar />
            <NavBar />
        </div>
        </BrowserRouter>
    );
}

export default App;