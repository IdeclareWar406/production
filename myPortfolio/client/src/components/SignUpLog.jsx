import React from 'react'
import SignUpForm from './SignUpForm.jsx'
import LoginPage from './LoginPage.jsx'
import "../index.css"


export default function SignUpLog(){
    const [signup, setSignup] = React.useState(false)

    document.body.style.background = 'linear-gradient(90deg, black, darkblue, darkpurple)'

    function swapForm(){
        setSignup(prevState=> !prevState)
    }

    return(
      <div className='loginContainer'>
        <h1>Suber Cyber Development {signup ? "Sign Up" : "Log in"} </h1>
        {signup ? <SignUpForm /> : <LoginPage />}
        <h2 onClick={swapForm}>{signup ? "Already have an account? Click here.": "Do not have an account? Click here"}</h2>
      </div>
    )
}