import React from "react";
import './HeaderBar.css';
import logo from "../../image/logo.svg";
import {NavLink} from "react-router-dom";


const HeaderBar = () => {
    return (
        <div className={'header-container'}>
            <div className={'header-logo'}>
                <img src={logo} alt=""/>
                Voltman /
                <div className={'header-markup'}>Главный по <br/>аккумуляторам!</div>
            </div>
            <input className={'header-search'} type="text"/>
            <NavLink to="/login" className={"header-login"}>
                <button>Вход</button>
            </NavLink>
            <NavLink to="/call" className={"header-call"}>
                <button>Заказать звонок</button>
            </NavLink>

        </div>
    );
}
export default HeaderBar;