import React from "react"
import { Link } from "react-router-dom"
import './index.css'


export default function Footer(){
const path= window.location

    if(path.pathname !='/about'){
    return(
        <div  className="footer">

        <h2>Thank you for visiting</h2>
        <Link className="contact" to='/contact'>Click here for contact information</Link>
      
        </div>
    )}
    // if(path.pathname === '/'){
    //     return(
    //         <div style={{position: 'relative', top: '150%'}} className="footer">
    
    //         <h2>Thank you for visiting</h2>
    //         <Link className="contact" to='/contact'>Click here for contact information</Link>
          
    //         </div>
    //     )
    // }
    else 
    return(

        <>
        <div style={{position: 'relative', top: '275%'}} className="footer">

        <h2>Thank you for visiting</h2>
        <Link className="contact" to='/contact'>Click here for contact information</Link>
      
        </div>

        
        </>
    )
    
}