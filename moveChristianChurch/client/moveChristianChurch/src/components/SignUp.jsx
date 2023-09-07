import React from "react"


export default function SignUp(){


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
        </div>
    )
}