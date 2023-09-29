import React from 'react'
import "../index.css"
import { ApiContext } from '../ApiContext'
export default function SignUpForm (){

const{signUpUser, landingChange, newUser, user} = React.useContext(ApiContext)

const[failedVerification, setFailedVerification] = React.useState(false)




function passVerification(event){
    event.preventDefault()
    if(newUser.password === newUser.checkPass){
        signUpUser()
        setFailedVerification(false)
    }
    else setFailedVerification(true)
}




    return(
        <div>
            <form className='signUpForm' onSubmit={passVerification}>
                <input name='firstName' onChange={landingChange} placeholder='first name'></input>
                <input name='lastName' onChange={landingChange} placeholder='last name' ></input>
                <input name='email' onChange={landingChange} placeholder='email' ></input>
                <input name='phone' onChange={landingChange} placeholder='phone number' ></input>
                <input name='username' onChange={landingChange} placeholder='username'></input>
                <input name='password' type='password' onChange={landingChange} placeholder='password'></input>
                <input name='checkPass' type='password' onChange={landingChange} placeholder='password'></input>
                <button>Sign up</button>
                {failedVerification && <h2 style={{color: 'red'}}>Passwords do not match</h2>}
                {user.errMsg && <h2 style={{color: 'red'}}>{user.errMsg} </h2>}
                
            </form>
        </div>
    )
}