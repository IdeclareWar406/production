import React from "react"
import { ApiContext } from "../ApiContext"
import "../index.css"



export default function StaffVolunteerLog(){
document.body.style.backgroundColor ="black"
    const {credentials, signOn, user, forgotPassword} = React.useContext(ApiContext)
    const [newPass, setNewPass] = React.useState(false)
    const [enterPin, setEnterPin] = React.useState(false)
    const [newCredentials, setNewCredentials] = React.useState({
        email:"",
        pin:"",
        password: "",
        checkPass: ""
    })
    const [newPassword, setNewPassword] = React.useState(false)


    function resetPassowrd(){
        setNewPass(prevState => !prevState)
    }
    function handleNewCredentials(event){
        const {name, value}= event.target
        setNewCredentials(prevState=> {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    function resetDatabase(event){
        event.preventDefault()
        
        if(newCredentials.email !="" && newCredentials.password === ""){
            console.log('this is true')
            forgotPassword(newCredentials)
            setEnterPin(prevState => true)
            setNewPassword(true)
        }
        else if(newCredentials.email && newCredentials.pin != ""){
            
            if(newCredentials.password === newCredentials.checkPass){
                console.log('this is true')
                forgotPassword(newCredentials)
                setNewPass(false)
                setEnterPin(false)
                setNewPassword(false)
                setNewCredentials({
                    email:"",
                    pin:"",
                    password: "",
                    checkPass: ""
                })
            }
        }
    }

    

    return(
        <>
            <div className="loginPage">
                <img src="/images/logo.png" width={"400px"}></img>
                <form className="loginForm" onSubmit={signOn}>
                <input type="text" name="username" onChange={credentials} placeholder="username" ></input>
                <input type="password" name="password" onChange={credentials} placeholder="password"></input>
                <button className="logInButton">Log in</button>
                </form>
                {user.errMsg && <h2 style={{color: 'red'}} >{user.errMsg} </h2>}
               <h3 className="forgotPass" onClick={resetPassowrd}>I forgot my password</h3>
              {newPass && <form className="loginPage" onSubmit={resetDatabase}>
                {!enterPin && <input type="text" name="email" placeholder="email" onChange={handleNewCredentials}></input>}
                {enterPin && <input type="text" name="pin" placeholder="pin from email"onChange={handleNewCredentials}></input>}
                {newPassword && <input type="password" name="password" placeholder="password" onChange={handleNewCredentials}></input>}
                {newPassword && <input type="password" name="checkPass" placeholder="re-type password"onChange={handleNewCredentials}></input>}
                <button>Submit</button>
               </form>}
            </div>
        </>

    )
}