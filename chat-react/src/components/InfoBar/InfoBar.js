import React from 'react';

import './InfoBar.css';
import online from './online.svg';

const InfoBar = ({room}) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            {/* <img className="onlineIcon" src={onlineIcon} /> */}
            {/* <p>*</p> */}
            <h3> <img src={online} width="30px" /> <span>{room}</span></h3>
        </div>        
        <div className="rightInnerContainer">
            <a href="/" className="close">
                {/* <img src={closeIcon} alt="close image"/> */}
                Выйти
            </a>
        </div>
    </div>
)


export default InfoBar;