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
           {user.token && <Link className='home' onClick={signOut} to='/'>Sign Out</Link>}
           {!user.token && <Link className='home' to='/login'>Log in</Link>}
          { user.token && user.user.isAdmin && <Link className='home' to='/admin' >Admin</Link>}
        </div>

    </div>
    </>
    )
}