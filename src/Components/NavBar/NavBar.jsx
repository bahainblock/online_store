import React from "react";
import './NavBar.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={'navbar-container'}>
            <NavLink to="/catalog" className={"navbar-catalog"}>
                <button>Catalog</button>
            </NavLink>
            <NavLink to="/stock" className={"navbar-stock"}>
                <button>Stock</button>
            </NavLink>
            <NavLink to="/blog" className={"navbar-blog"}>
                <button>Blog</button>
            </NavLink>
            <NavLink to="/faq" className={"navbar-faq"}>
                <button>Faq</button>
            </NavLink>
        </div>
    );
}

export default NavBar;