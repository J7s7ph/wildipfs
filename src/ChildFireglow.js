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
         <div className="">
            <img src={Bufficorn} className="Fireglow-childnft" alt=""/>
            <img src={BufficornII} className="Fireglow-childnft" alt=""/>
         </div>
    )
}
export default ChildFireglow;