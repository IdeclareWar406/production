import React from "react"
import { ApiContext } from "../ApiContext"

export default function SignUp(){
const{passCheck} = React.useContext(ApiContext)

    return(
        <div>
            <form>
                <input type='text' placeholder='first name' ></input>
                <input type='text' placeholder='last name' ></input>
                <input type='email' placeholder='email'></input>
                <input type='phone' placeholder='phone'></input>  
                <input type="text" placeholder="username"></input>
                <input type="password" placeholder="password" name="password"></input>
                <input type="password" placeholder="password" name="checkPass"></input>
            </form>
            {passCheck && <h2 style={{color:'red'}}>All fields are required or passwords do not match</h2>}
        </div>
    )
}