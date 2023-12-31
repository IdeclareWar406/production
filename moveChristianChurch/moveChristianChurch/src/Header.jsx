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

    if(window.innerWidth > 799){
    return(
        <>
         <img className="headerPhoto" src="https://images.unsplash.com/photo-1599406079829-a91deeb440de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80" ></img>
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
           {token && <a className="ionos" href="https://login.1and1-editor.com/717316849/www.movechristianchurch.com/us?pageId=1373414383" target="_id">IONOS</a>}
           <a className="events" href="https://subsplash.com/u/movechristianchurch/give" target="_blank">Giving</a>
            </div>
           
        </div>
        </>
    )}
    else if(window.innerWidth < 799){
        return (
            <>
             <img className="headerPhoto" src="https://images.unsplash.com/photo-1599406079829-a91deeb440de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80" ></img>
             <div className="threeLines" style={{color: 'white'}}>
             {mobile ? <h1 className="mobileButton" onClick={useMobile}>&#9747;</h1> :  <h1 className="mobileButton" onClick={useMobile}>&#9776;</h1>}
             {mobile &&<div className="mobileLinks">
                <Link onClick={useMobile} className="home" to="/"  element={<Home />} >Home</Link>
            <Link onClick={useMobile} className="about" to="/about"  element={<About />}>About</Link>
            <Link onClick={useMobile} className="prayer" to="/prayer" element={<Prayer />}>Prayer</Link>
            <Link onClick={useMobile} className="events" to="/events" element={<Events />}>Events</Link>
            <Link onClick={useMobile} className="prayer" to="/ministries" element={<Ministries />} >Ministries</Link>
           {token? <span onClick={logOut} className="login">Logout</span>: <Link onClick={useMobile} className="login" to="/login" element={ <StaffVolunteerLog />} >Log in</Link> }
           {token && user.user.isAdmin && <Link onClick={useMobile} className="admin" to="/admin" element={<Admin />}>Admin</Link>}
           {token && <a onClick={useMobile} className="ionos" href="https://login.1and1-editor.com/717316849/www.movechristianchurch.com/us?pageId=1373414383" target="_id">IONOS</a>}
           <a onClick={useMobile} className="events" href="https://subsplash.com/u/movechristianchurch/give" target="_blank">Giving</a>
                </div>}
             </div>
            </>
        )
    }
    
}