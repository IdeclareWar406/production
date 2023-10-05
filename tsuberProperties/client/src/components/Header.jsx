import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default function Header(){


    return(
        <>
        
    <div className='headerContainer'>
        <div className='logoChild mt-[20px] '>
            <Link to='/'><img src='images/beachHavenLogo.png' style={{width: '250px'}} ></img></Link>
        
        </div>
        <div className='links mt-[40px] font-bold'>
            <Link className='home' to='/'>Home</Link>
            <Link className='home' to='/about' >About</Link>
        </div>

    </div>
    </>
    )
}