import React from "react";

const Header = () => {
    return(
        <div className={'app-wrapper'}>
            <div className={'header-left'}>
                <div className={'header-logo'}>Miko</div>
                <div className={'header-catalog'}><button className={'header-btn'}>Каталог</button></div>
            </div>
            <div className={'header-search'}><input type="text"/></div>
            <div className={'header-right'}>
                <div className={'header-basket'}>Корзина</div>
                <div className={'header-favorite'}>избранное</div>
            </div>
        </div>
    )
}
export default Header;