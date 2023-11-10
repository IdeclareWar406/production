import React from "react"
import LoginForm from "./LoginForm"
import "../index.css"
import SignupForm from "./SignupForm"
export default function Login(){

    const [isUser, setIsUser] = React.useState(true)

    function newUser (){
        setIsUser(prevState => !prevState)
    }
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    return(
        <>
        <img className="loginPhoto" src="./assets/images/loginPhoto.jpg" width={windowWidth} height={windowHeight}></img>
        <div className="loginParent">

        <div className="loginSignup">
            <h1>Welcome to Serranis</h1>
      {   isUser?   <LoginForm isUser={isUser} /> : <SignupForm />}
      <h2 onClick={newUser}>{isUser? "Signup Here" : "Login Here"} </h2>
        </div>
     
        </div>
        </>
    )
}