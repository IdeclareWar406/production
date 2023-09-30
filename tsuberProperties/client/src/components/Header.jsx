import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default function Header(){


    return(
        <>
        <img src='images/20230525_135529.jpg' height={'600px'} width={'100%'}></img>
    <div className='headerContainer'>
        <div className='logoChild'>
            <Link to='/'><img src='images/beachHavenLogo.png'></img></Link>
        
        </div>
        <div className='links'>
            <Link className='home' to='/'>Home</Link>
            <Link className='home' to='/about' >About</Link>
        </div>

    </div>
    </>
    )
}