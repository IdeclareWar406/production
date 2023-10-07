import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { ApiContext } from '../ApiContext'
export default function Header(){
const {user, signOut} = React.useContext(ApiContext)

    return(
        <>
        
    <div className='headerContainer'>
        <div className='logoChild mt-[20px] '>
            <Link to='/'><img src='images/beachHavenLogo.png' style={{width: '250px'}} ></img></Link>
        
        </div>
        <div className='links mt-[40px] font-bold'>
            <Link className='home' to='/'>Home</Link>
            <Link className='home' to='/about' >About</Link>
            <Link className='home' onClick={user.token && signOut} to='/login'>{user.token? 'Sign Out' : 'Log in'} </Link>
          { user.token && user.user.isAdmin && <Link className='home' to='/admin' >Admin</Link>}
        </div>

    </div>
    </>
    )
}