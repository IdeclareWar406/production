import React from "react"
import {Link, Navigate} from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Prayer from "./components/Prayer.jsx"
import Events from "./components/Events.jsx"
import StaffVolunteerLog from "./components/StaffVolunteerLog.jsx"
import { ApiContext } from "./ApiContext.jsx"
import Admin from "./components/Admin.jsx"
import Ministries from "./components/Ministries.jsx"


export default function Header(){

    const{user,logOut} = React.useContext(ApiContext)
    const token = user.token

    const [mobile, setMobile] = React.useState(false)

    function useMobile(){
        setMobile(prevState => !prevState)
    }


    return(
        <>
         <img src="https://images.unsplash.com/photo-1599406079829-a91deeb440de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80" width={"100%"} height={"400px"}></img>
        <div className="header"> 
          {window.innerWidth > 799 &&  <div className="headerLogo">
                <Link to="/" element={<Home />}>
                <img src="/images/logo.png" width={"200px"}></img>
                </Link>
            </div>}
           
           <div className="links">
            {/* <h2 className="threeLines">&#8942;</h2> */}
            <Link className="home" to="/"  element={<Home />} >Home</Link>
            <Link className="about" to="/about"  element={<About />}>About</Link>
            <Link className="prayer" to="/prayer" element={<Prayer />}>Prayer</Link>
            <Link className="events" to="/events" element={<Events />}>Events</Link>
            <Link className="prayer" to="/ministries" element={<Ministries />} >Ministries</Link>
           {token? <span onClick={logOut} className="login">Logout</span>: <Link className="login" to="/login" element={ <StaffVolunteerLog />} >Log in</Link> }
           {token && user.user.isAdmin && <Link className="admin" to="/admin" element={<Admin />}>Admin</Link>}
           {token && <a className="ionos" href="https://login.1and1-editor.com/717316849/www.movechristianchurch.com/us?pageId=1373414383" target="_id">IONOS Login</a>}
           <a className="events" href="https://subsplash.com/u/movechristianchurch/give" target="_blank">Giving</a>
            </div>
           
        </div>
        </>
    )
    
}