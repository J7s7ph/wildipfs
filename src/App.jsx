import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
/*import Header from "./Header";
import MainContent from "./MainContent";
import NFTView from "./NFTView";
import Article from "./Article";
import Footer from "./Footer"; */
import Home from "./Home";
import Blog from "./Blog";
import Fireglow from "./Fireglow";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="blog" element={ <Blog/> } />
        <Route path="fireglow" element={ <Fireglow/> } />
      </Routes>
      
      
    </div>
  );
}

export default App;

/* <Header />
      <MainContent />
      <Article />
      <NFTView />
      <Footer /> */