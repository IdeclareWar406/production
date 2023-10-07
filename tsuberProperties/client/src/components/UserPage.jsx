import React from 'react'
import { ApiContext } from '../ApiContext'
import '../index.css'



export default function UserPage(){
const {login, signOnChange,signIn,user } = React.useContext(ApiContext)
    const height = window.innerHeight

    const renderHeight = height / 2

   


    return(
        <>
       <div>
        <img src='images/20230525_133649_01.jpg'/>
       </div>
        <div className={`flex flex-col justify-center items-center absolute top-1/2 w-full ` } >
            <h1 className='text-[20px] text-white'>Realtor Log in  </h1>
            <form onSubmit={signIn} className='flex flex-col mt-[10px]'  style={{border: 'white solid 2px'}}>
                <input className='rounded' name='username' type='text' value={login.username} placeholder='username' onChange={signOnChange} />
                <input className='mt-5 rounded' name='password' type='password' value={login.password} placeholder='password' onChange={signOnChange} />
                <button className='text-white bg-stone-300 mt-5 rounded'>Log in</button>
                {user.errMsg && <h2 style={{color:'red'}}>{user.errMsg} </h2>}
            </form>
        </div>
        </>
    )
}