import React from "react"
import {Link} from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Prayer from "./components/Prayer.jsx"

export default function Header(){

    return(
        <>
         <img src="src/images/blackWhiteChurchImg.jpg" width={"100%"} height={"400px"}></img>
        <div className="header"> 
            <div className="headerLogo">
                <Link to="/" element={<Home />}>
                <img src="src/images/logo.png" width={"200px"}></img>
                </Link>
            </div>
            <div className="links">
            <Link className="home" to="/"  element={<Home />} >Home</Link>
            <Link className="about" to="/about"  element={<About />}>About</Link>
            <Link className="prayer" to="/prayer" element={<Prayer />}>Prayer</Link>
            <a className="ionos" href="https://login.1and1-editor.com/717316849/www.movechristianchurch.com/us?pageId=1373414383" target="_id">IONOS Login</a>
            </div>
        </div>
        </>
    )
    
}