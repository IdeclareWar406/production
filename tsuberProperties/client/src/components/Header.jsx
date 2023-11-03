import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { ApiContext } from '../ApiContext'
export default function Header(){
const {user, signOut} = React.useContext(ApiContext)

    return(
        <>
        
    <div className='headerContainer'>
        <div className='logoChild mt-[20px] flex flex-col '>
            <Link to='/'><img src='images/beachHavenLogo.png' style={{width: '350px'}} ></img></Link>
                <p>Address: 50 Somersault Ln </p>
                <p>Watersound, FL, 32413</p>
        </div>
        <div className='links mt-[40px] font-bold'>
            <Link className='home' to='/'>Home</Link>
           
           {user.token && <Link className='home' onClick={signOut} to='/'>Sign Out</Link>}
           {!user.token && <Link className='home' to='/login'>Log in</Link>}
          { user.token && user.user.isAdmin && <Link className='home' to='/admin' >Admin</Link>}
        </div>

    </div>
    </>
    )
}