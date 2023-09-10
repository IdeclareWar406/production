import React from 'react'
import '../index.css'
import { ApiContext } from '../ApiContext'

export default function VolunteerForm(){

    const{passCheck,volunteerHandleChange,addVolunteer} = React.useContext(ApiContext)
    return(
        <div>

            <form className='volunteerForm' onSubmit={addVolunteer}>
                <h2 style={{color:'white'}}>Volunteer Form</h2>
                <input onChange={volunteerHandleChange} type='text' placeholder='first name' name='firstName' ></input>
                <input onChange={volunteerHandleChange} type='text' placeholder='last name' name='lastName' ></input>
                <input onChange={volunteerHandleChange} type='email' placeholder='email' name='email'></input>
                <input onChange={volunteerHandleChange} type='phone' placeholder='phone' name='phone'></input>
                <button >Submit</button>
                {passCheck && <h2 style={{color:'red'}}>All fields are required</h2>}
            </form>
            
        </div>
    )
}