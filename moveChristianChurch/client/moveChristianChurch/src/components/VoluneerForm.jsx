import React from 'react'
import '../index.css'


export default function VolunteerForm(){
    return(
        <div>
            <form>
                <input type='text' placeholder='first name' ></input>
                <input type='text' placeholder='last name' ></input>
                <input type='email' placeholder='email'></input>
                <input type='phone' placeholder='phone'></input>
            </form>
        </div>
    )
}