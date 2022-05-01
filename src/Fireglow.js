import React from "react";
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import WildBlackLogo from "./Images/WildBlackLogo.jpg"
import InstagramIcon from "./Images/InstagramIcon.png"
import Footer from "./Footer";
import FireglowMain from "./FireglowMain";

function Fireglow() {
    return (
        <div>
            <Header />
        
            <FireglowMain />
        
            <Footer />
            
        </div>
      
    )
  }
  export default Fireglow;