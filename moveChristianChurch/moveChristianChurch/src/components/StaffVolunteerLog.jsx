import React from "react"
import { ApiContext } from "../ApiContext"
import "../index.css"



export default function StaffVolunteerLog(){
document.body.style.backgroundColor ="black"
    const {credentials, signOn, user} = React.useContext(ApiContext)



    return(
        <>
            <div className="loginPage">
                <img src="../src/images/logo.png" width={"400px"}></img>
                <form className="loginForm" onSubmit={signOn}>
                <input type="text" name="username" onChange={credentials} placeholder="username" ></input>
                <input type="password" name="password" onChange={credentials} placeholder="password"></input>
                <button className="logInButton">Log in</button>
                </form>
                {user.errMsg && <h2 style={{color: 'red'}} >{user.errMsg} </h2>}
               
            </div>
        </>

    )
}