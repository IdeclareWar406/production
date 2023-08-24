import React from "react"
import {Link} from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"


export default function Header(){

    return(
        <div>
            <div>
            <Link to="/" element={<Home />} >Home</Link>
            <Link to="/about" element={<About />}>About</Link>
            </div>
        </div>
    )
    
}