import React from "react";

const HeaderBar = () => {
    return (
        <div className={'header-container'}>
            <div className={'header-logo'}>Voltman
                <div className={'header-markup'}>Главный по аккумуляторам</div>
                <div className={'header-search'}><input type="text"/></div>
            </div>
            <div className={'header-login'}>Вход
                <div className={'header-call'}>Заказать звонок</div>
            </div>
        </div>
    );
}
export default HeaderBar;