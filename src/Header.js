import React from "react"
import ReactDOM from "react-dom"
import WildBlackLogo from "./Images/WildBlackLogo.jpg"
import TwitterIcon from "./Images/TwitterIcon.png"
import InstagramIcon from "./Images/InstagramIcon.png"
import GitHubIcon from "./Images/GitHubIcon.png"
import LinkedinIcon from "./Images/LinkedinIcon.png"
import { Link } from "react-router-dom"

export default function Header() {
    return (
      <header>
        <nav className="App-navhead">
        <Link to="/"> <img src={WildBlackLogo} className="App-navlogo" alt=""/></Link>
          <ul className="App-navitems">
            <li> <Link to="/blog" className="App-bloglink"> BLOG</Link></li>
            <li> <Link to="/Fireglow" className="App-bloglink"> FIREGLOW</Link></li>
          </ul>
        </nav>
    </header>
    )
  }

  

 /* <a className="App-studiolink" href="http://www.studiowildwood.com"
            target="_blank"
            rel="noopener noreferrer" */ 