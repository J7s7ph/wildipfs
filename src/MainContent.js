import React from "react"
import ReactDOM from "react-dom"

function clickMe(){
  alert("You clicked")
}

function MainContent() {
    return (
      <main className="App-main">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-h1">Digital Transplants</h1>
              <h3>Brick and mortar retail garden center turned<br></br>retail investor in web3</h3>
              <p>From 1975 – 2020, Wildwood inspired designers in California and beyond.<br></br>Wildwood connects public spaces with the resources they need to succeed in web3.</p>
              <p>Wildwood launches digital twin nft collections for public gardens.</p>
          <p className="App-email"> 
            <a className="App-studiolink" href="http://www.studiowildwood.com"
            target="_blank" rel="noopener noreferrer" > 
            Studio Wildwood</a>
          </p>
          
      </main>
    )
  } 

export default MainContent