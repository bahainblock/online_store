import React from "react";
import './NavBar.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={'navbar-container'}>
            <NavLink to="/catalog" className={"navbar-catalog"}>
                <button>Каталог</button>
            </NavLink>
            <NavLink to="/stock" className={"navbar-stock"}>
                <button>Акции</button>
            </NavLink>
            <NavLink to="/blog" className={"navbar-blog"}>
                <button>Блог</button>
            </NavLink>
            <NavLink to="/faq" className={"navbar-faq"}>
                <button>Контакты</button>
            </NavLink>
        </div>
    );
}

export default NavBar;