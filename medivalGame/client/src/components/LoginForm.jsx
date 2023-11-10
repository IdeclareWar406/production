import React from "react"
import "../index.css"
import { GameContext } from "../GameContext"
export default function LoginForm(props){
    const {handleLogin, loginRequest, login} = React.useContext(GameContext)
    const {isUser} = props
    return(
        <>
        <div className="login">
            <form className="loginForm" onSubmit={loginRequest}>
                <input type="text" name="username" placeholder="username" onChange={handleLogin} value={login.username}></input>
                <input className="password" type="password" name="password" placeholder="password" onChange={handleLogin} value={login.password}></input>
               <button className="submit">Login</button>
            </form>
        </div>
        </>
    )
}