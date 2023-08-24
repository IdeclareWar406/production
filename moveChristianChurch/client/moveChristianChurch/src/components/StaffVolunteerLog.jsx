import React from "react"
import { ApiContext } from "../ApiContext"
import "../index.css"



export default function StaffVolunteerLog(){

    const {credentials} = React.useContext(ApiContext)



    return(
        <>
            <div className="loginPage">
                <img src="../src/images/logo.png" width={"400px"}></img>
                <form className="loginForm">
                <input type="text" name="username" onChange={credentials} placeholder="username" ></input>
                <input type="text" name="password" onChange={credentials} placeholder="password"></input>
                </form>
            </div>
        </>

    )
}