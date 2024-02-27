import React from "react";
import './HeaderBar.css';
import logo from  "../../image/logo.svg";


const HeaderBar = () => {
    return (
        <div className={'header-container'}>
            <div className={'header-logo'}>
                <img src={logo} alt=""/>
                Voltman /
                <div className={'header-markup'}>Главный по <br/>аккумуляторам!</div>
            </div>
            <input className={'header-search'} type="text"/>

            <button className={'header-button-login'}>Вход</button>
            <button className={'header-call-button'}>Заказать звонок</button>
            </div>
    );
}
export default HeaderBar;