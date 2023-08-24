import React from "react"
import {Link} from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"


export default function Header(){

    return(
        <div className="header">
            <div className="headerLogo">
                <img src="src/images/logo.png" width={"200px"}></img>
            </div>
            <div className="links">
            <Link className="home" to="/"  element={<Home />} >Home</Link>
            <Link className="about" to="/about"  element={<About />}>About</Link>
            </div>
        </div>
    )
    
}