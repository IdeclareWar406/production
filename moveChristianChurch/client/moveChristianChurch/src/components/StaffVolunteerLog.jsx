import React from "react"
import { ApiContext } from "../ApiContext"
import "../index.css"



export default function StaffVolunteerLog(){
document.body.style.backgroundColor ="black"
    const {credentials, signOn} = React.useContext(ApiContext)



    return(
        <>
            <div className="loginPage">
                <img src="../src/images/logo.png" width={"400px"}></img>
                <form className="loginForm" onSubmit={signOn}>
                <input type="text" name="username" onChange={credentials} placeholder="username" ></input>
                <input type="text" name="password" onChange={credentials} placeholder="password"></input>
                <button className="logInButton">Log in</button>
                </form>
            </div>
        </>

    )
}