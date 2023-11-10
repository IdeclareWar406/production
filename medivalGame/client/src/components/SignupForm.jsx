import React from "react"
import "../index.css"

export default function SignupForm(){

    return(<>
        <div className="login">
            <form className="signupForm">
             
                <input type="text" name="username" placeholder="username"></input>
                
                <input type="password" name="password" placeholder="password"></input>
                <input type="password" name="checkPass" placeholder="re-type password"></input>
               
                <input type="email" name="email" placeholder="email"></input>
                <button className="submit">Submit</button>
            </form>
        </div>
    
    </>)
}