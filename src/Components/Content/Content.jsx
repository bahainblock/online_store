import React from "react";
import './Content.css'
import FirstBaner from '../../image/FirstBaner.svg';
import SecondBaner from '../../image/SecondBaner.svg';

const Content = () => {
    return (
        <div className={'content-container'}>
            <div className={'content-left'}>
                <div className={'first-baner'}>
                    <img src={FirstBaner} alt="" />
                </div>
            </div>
            <div className={'content-right'}>
                <div className={'second-baner'}>
                    <img src={SecondBaner} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Content;
