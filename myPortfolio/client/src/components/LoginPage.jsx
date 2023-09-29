import React from "react"
import { ApiContext } from "../ApiContext"

export default function LoginPage(){
    const{loginChangeHandle, signIn, user} = React.useContext(ApiContext)



    return(
        <div>
            <form className="signUpForm" onSubmit={signIn}>
                <input name="username" type="text" placeholder="username" onChange={loginChangeHandle}></input>
                <input type="password" name="password" placeholder="password" onChange={loginChangeHandle}></input>
                <button>Log in</button>
                {user.errMsg && <h2 style={{color: 'red'}}>{user.errMsg} </h2>}
            </form>
        </div>
    )
}