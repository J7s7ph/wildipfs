import React from "react";
import './App.css';
import { useState } from 'react';
import Header from "./Header";
import MainContent from "./MainContent";
import NFTView from "./NFTView";
import Article from "./Article";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="Home">
        <Header />
        <MainContent />
        
        <NFTView />
        <Footer />
      </div>
    );
  }
  
  export default Home;