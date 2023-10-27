import React from 'react'
import { ApiContext } from '../ApiContext'

export default function Login(){
    const {user, credentials, signOn} = React.useContext(ApiContext)

    return(
        <div className='absolute top-1/2 left-1/2  '>
            <form className='flex flex-col text-[20px] items-center' onSubmit={signOn}>
                <input type='text' name='username' placeholder='username' onChange={credentials}></input>
                <input className='mt-5' type='password' name='password' placeholder='password' onChange={credentials}></input>
                <button className='mt-5 bg-white rounded w-[70px]'>Login</button>
            </form>
            {user.errMsg && <h1 className='text-[25px] text-red'>{user.errMsg} </h1>}
        </div>
    )
}