import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { ApiContext } from '../ApiContext'
export default function Header(){
const {user, signOut} = React.useContext(ApiContext)

const [mobileView, setMobileView] = React.useState(false)


function isMobile(){
    setMobileView(prevState => !prevState)
}





    if(window.innerWidth > 799){
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
    )}
    else if (window.innerWidth < 799){
        return(
           <>
          <div className='flex justify-between items-center h-auto mr-2'>
          <div className='logoChild mt-[20px] flex flex-col '>
            <Link to='/'><img src='images/beachHavenLogo.png' style={{width: '150px'}} ></img></Link>
                <p>Address: 50 Somersault Ln </p>
                <p>Watersound, FL, 32413</p>
        </div>

            <div >
         { mobileView?  <h1 onClick={isMobile}>X </h1> : <h1 onClick={isMobile}>&#9776;</h1>}

         {mobileView && <div className='flex'>
         <div className='links mt-[20px] font-bold flex flex-col h-auto w-[50px]'>
            <Link className='home' to='/'>Home</Link>
           
           {user.token && <Link className='home' onClick={signOut} to='/'>Sign Out</Link>}
           {!user.token && <Link className='home' to='/login'>Log in</Link>}
          { user.token && user.user.isAdmin && <Link className='home' to='/admin' >Admin</Link>}
        </div>
            
            </div>}
          </div>
          </div>
           </>
        )
    }
}