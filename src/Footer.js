import React from "react"
import ReactDOM from "react-dom"
import TwitterIcon from "./Images/TwitterIcon.png"
import InstagramIcon from "./Images/InstagramIcon.png"
import GitHubIcon from "./Images/GitHubIcon.png"
import LinkedinIcon from "./Images/LinkedinIcon.png"

function Footer() {
    return (
      <footer className="App-footer">
        <ul className="App-footeritems">
          <li>
          <ul className="App-footericons">
            <li><a href="https://twitter.com/j7s7ph" target="_blank" rel="noopener noreferrer"> <img src={TwitterIcon} alt="" /></a></li>
            <li><a href="https://www.instagram.com/wildwood_nursery/" target="_blank" rel="noopener noreferrer"> <img src={InstagramIcon} alt="" /></a></li>
            <li><a href="https://github.com/J7s7ph" target="_blank" rel="noopener noreferrer"> <img src={GitHubIcon} alt="" /></a></li>
            <li><a href="https://www.linkedin.com/in/josephmonte/" target="_blank" rel="noopener noreferrer"> <img src={LinkedinIcon} alt="" /></a></li>

        </ul>
          </li>
          <li></li>
          <li>BUIDL @San Francisco 2022</li>
        </ul>
       
      </footer>
    )
  } 

export default Footer