import React from "react"
import "../index.css"
export default function LoginForm(props){
    const {isUser} = props
    return(
        <>
        <div className="login">
            <form className="loginForm">
                <input type="text" name="username" placeholder="username"></input>
                <input className="password" type="password" name="password" placeholder="password"></input>
                {isUser ? <button>Login</button> :  <button> Sign up </button>}
            </form>
        </div>
        </>
    )
}