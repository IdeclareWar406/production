import React from 'react'
import { ApiContext } from '../ApiContext'
import '../index.css'



export default function UserPage(){
const {login, signOnChange,signIn,user } = React.useContext(ApiContext)
    const height = window.innerHeight
    const [resetPassword, setResetPassword] = React.useState(false)
    const renderHeight = height / 2
    const [enterPin , setEnterPin] = React.useState(false)

    const [resetInfo, setResetInfo] = React.useState({
        newPassword:"",
        checkPass: "",
        pin: ""
    })

    function handleResetInfo(event){
        const {name, value} = event.target

        setResetInfo(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    function sendResetInfo(event){
        // write axios function to send the data to api
    }

   


    return(
        <>
        <div>
       <div >
        <img className='loginImg fixed' src='images/20230525_133649_01.jpg '/>
       </div>
        <div className={`flex flex-col justify-center items-center absolute top-1/4 w-full ` } >
            <h1 className='text-[20px] text-black font-bold'>Realtor Log in  </h1>
            <form onSubmit={signIn} className='flex flex-col mt-[10px]'  style={{ width: '300px'}}>
                <input className='rounded' name='username' type='text' value={login.username} placeholder='username' onChange={signOnChange} />
                <input className='mt-5 rounded' name='password' type='password' value={login.password} placeholder='password' onChange={signOnChange} />
                <button className='text-black font-bold bg-stone-300 mt-5 rounded'>Log in</button>
                {user.errMsg && <h2 style={{color:'red'}}>{user.errMsg} </h2>}
            </form>
        {!resetPassword && <h1> I forgot my password</h1>}
        {resetPassword && <div className='flex flex-col justify-center items-center text-[20px]'>
                <h2>Please input your email linked to your account</h2>
                <input type='email' name='email' placeholder='email'></input>
               {!enterPin&& <button>Send</button>}
                {enterPin && <div>
                    <h2>Enter the pin set to your email</h2>
                    <input type='text' name='pin' placeholder='pin'></input>
                    <h2>Enter your new password</h2>
                    <input type='password' name='newPassword' placeholder='New Password'></input>
                    <h2>Re-enter your new password</h2>
                    <input type='password' name='checkPass' placeholder='re-type password'></input>
                    <button>Reset</button>
                    </div>}

            </div>}

        </div>
        </div>
        </>
    )
}