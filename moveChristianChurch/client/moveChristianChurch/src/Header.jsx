import React from "react"
import {Link, Navigate} from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Prayer from "./components/Prayer.jsx"
import Events from "./components/Events.jsx"
import StaffVolunteerLog from "./components/StaffVolunteerLog.jsx"
import { ApiContext } from "./ApiContext.jsx"
import Admin from "./components/Admin.jsx"
export default function Header(){

    const{user,logOut} = React.useContext(ApiContext)
    const token = user.token


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
            <Link className="events" to="/events" element={<Events />}>Events</Link>
           {token? <span onClick={logOut} className="login">Logout</span>: <Link className="login" to="/login" element={ <StaffVolunteerLog />} >Log in</Link> }
           {token && <Link className="admin" to="/admin" element={<Admin />}>Admin</Link>}
           {token && <a className="ionos" href="https://login.1and1-editor.com/717316849/www.movechristianchurch.com/us?pageId=1373414383" target="_id">IONOS Login</a>}
            </div>
        </div>
        </>
    )
    
}