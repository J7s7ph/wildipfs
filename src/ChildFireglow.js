import React from "react";
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Flame from "./Images/flame-image.png"
import JoeBio from "./Images/JoeBio.JPG"
import BTC from "./Images/btc-22.jpg"
import AMS from "./Images/ethams.png"
import NYC from "./Images/ethnyc.png"
import BufficornII from "./Images/bufficorn.png"
import Bufficorn from "./Images/Bufficorn7313.png"
import Home from "./Images/home-icon.jpg"
import Mag from "./Images/search-icon.png"


function ChildFireglow(props) {
    
    return (
        <div className="Fireglow-card">
            
            <div className="Fireglow-nav">
                <p className="Fireglow-logo">Fireglow</p>
                <p className="Fireglow-plus">{props.add}</p>
                <img src={Flame} className="Fireglow-footericon" alt=""/>

            </div>
            <div className="Fireglow-story">
                <img src={JoeBio} className="Fireglow-storyicon" alt=""/>
                <img src={BTC} className="Fireglow-storyicon" alt=""/>
                <img src={AMS} className="Fireglow-storyicon" alt=""/>
                <img src={NYC} className="Fireglow-storyicon" alt=""/>
                
            </div>
            <div className="Fireglow-data">
                <p className="Fireglow-text">{props.minter}</p>

            </div>
            
            <img src={BufficornII} className="Fireglow-nft" alt=""/>

            
            <div className="Fireglow-footer">
                <img src={Home} className="Fireglow-footericon" alt=""/>
                <img src={Mag} className="Fireglow-footericon" alt=""/>
                <img src={JoeBio} className="Fireglow-footericon" alt=""/>

            </div>

    </div>
    )
}
export default ChildFireglow;

/*


<div className="">
            <img src={props.img} className="Fireglow-childnft" alt=""/>
            
         </div>

<div className="Fireglow-cardfilter">{props.filter}</div>         
*/            