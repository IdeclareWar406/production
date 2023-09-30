import React from 'react'
import {Link} from "react-router-dom"
import Home from "./components/Home.jsx"
import "./index.css"
import SignUpLog from './components/SignUpLog.jsx'
import LandingPage from './LandingPage.jsx'
import { ApiContext } from './ApiContext.jsx'
import Admin from './components/Admin.jsx'
import ClientView from './components/ClientView.jsx'
import About from './components/About.jsx'
import StarParticle from './components/StarParticle.jsx'
export default function Header(){

    const{user, signOut} = React.useContext(ApiContext)
    const [linkBackground, setLinkBackground] = React.useState({
      home: true,
      login: false,
      project: false,
      admin: false,
      profile: false,
      about:false
    })


  const path = window.location
  
 const selectedStyle = { backgroundColor: 'purple'}

  function selectedPage(){
   
    if(path.pathname === '/'){
      setLinkBackground(prevState=>{
        return{
          ...prevState,
          home:true,
          login: false,
          project: false,
          admin: false,
          profile: false,
          about:false
        }
      })
    }
    else if(path.pathname === '/about'){
      setLinkBackground(prevState =>{
        return{
          ...prevState,
          home:false,
          login: false,
          project: false,
          admin: false,
          profile: false,
          about:true
        }
      })
    }
    else if(path.pathname === '/admin'){
      setLinkBackground(prevState =>{
        return{
          ...prevState,
          home:false,
          login: false,
          project: false,
          admin: true,
          profile: false,
          about:false
        }
      })
    }

    else if(path.pathname === '/project'){
      setLinkBackground(prevState =>{
        return{
          ...prevState,
          home:false,
          login: false,
          project: true,
          admin: false,
          profile: false,
          about:false
        }
      })
    }
    else if(path.pathname === '/login'){
      setLinkBackground(prevState =>{
        return{
          ...prevState,
          home:false,
          login: true,
          project: false,
          admin: false,
          profile: false,
          about:false
        }
      })
    }
    else if(path.pathname === '/profile'){
      setLinkBackground(prevState =>{
        return{
          ...prevState,
          home:false,
          login: false,
          project: false,
          admin: false,
          profile: true,
          about:false
        }
      })
    }

  }
  


    return(
        <>
         {/* <img src='https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2203&q=80' height={"400px"} width={"100%;"}></img> */}
        <div className='header'>
        { window.innerWidth > 800 &&   <div>
           
         <Link className='llcName' to='/' element={<Home />} >  Suber Cyber Development LLC</Link>
            </div>}
           <div className='links'>
           <Link className='home'  to="/" element={<Home />} >Home</Link>
         {user.token ? <span className='home' onClick={signOut}>Sign Out</span> : <Link className='home' to="/login" element={<SignUpLog />}>Log in/Sign Up</Link>}
           <Link className='home' to="/landingpage" onClick={selectedPage}  element={<LandingPage />} >Project Submission</Link>
          {user.user.isAdmin && <Link className='home' to="/admin" onClick={selectedPage}  element={<Admin />} >Admin</Link>}
         {user.token && !user.user.isAdmin && <Link className='home' to="/profile" onClick={selectedPage}  element={<ClientView />}>Profile</Link>}
         <Link className='home' to='/about' >About</Link>
           </div>
        </div>
        <StarParticle />
        </>
    )
}