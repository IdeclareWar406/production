import React from "react"
import LoginForm from "./LoginForm"
import "../index.css"
export default function Login(){

    const [isUser, setIsUser] = React.useState(true)

    function newUser (){
        setIsUser(prevState => !prevState)
    }

    return(
        <>
        <div className="loginParent">

        <div className="loginSignup">
      {   isUser?   <LoginForm isUser={isUser} /> : <h2>PlaceHolder</h2>}
      <h2 onClick={newUser}>{isUser? "Signup Here" : "Login Here"} </h2>
        </div>
     
        </div>
        </>
    )
}