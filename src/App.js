import React from 'react';
import './styles/common.css'
import HeaderBar from "./Components/HeaderBar/HeaderBar";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Content from "./Components/Content/Content";

function App() {
    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>
            <HeaderBar />
            <NavBar />
            <Content />
        </div>
        </BrowserRouter>
    );
}

export default App;