import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from "./Header";
import MainContent from "./MainContent";
import NFTView from "./NFTView";
import Blog from "./Blog";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Blog />
      <NFTView />
      <Footer />
      
    </div>
  );
}

export default App;