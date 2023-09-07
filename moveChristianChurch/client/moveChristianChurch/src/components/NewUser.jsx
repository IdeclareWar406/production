import React from 'react'
import { ApiContext } from '../ApiContext'
import "../index.css"

export default function NewUser(){
    const {newUserHandleChange, addNewUser, newUser, passCheck,user} = React.useContext(ApiContext)

return(
    <div className='newMission' >
        <h2>New User</h2>
    <form className='newUserForm' onSubmit={addNewUser}>
    <input type="text" name="username" placeholder="username" onChange={newUserHandleChange} value={newUser.username} ></input>
   <input type="text" name="firstName" placeholder="First Name" onChange={newUserHandleChange} value={newUser.firstName} ></input><input type="text" name="lastName" placeholder="Last Name" onChange={newUserHandleChange} value={newUser.lastName}></input>
   <input type="text" name="email" placeholder="email" onChange={newUserHandleChange} value={newUser.email}></input>
   <input type="text" name="phone" placeholder="phone number" onChange={newUserHandleChange} value={newUser.phone}></input>
   <input type="password" name="password" placeholder="password" onChange={newUserHandleChange} value={newUser.password}></input>
   <input type='password' name='verificator' placeholder='re-type password' onChange={newUserHandleChange} value={newUser.verificator}></input>
   <button style={{width: "50%", alignSelf: 'center'}}>Submit</button>
  {passCheck && <h2 style={{color:'red'}}>Passwords do not match</h2>}
  {user.errMsg && <h2 style={{color:'red'}}>{user.errMsg} </h2>}
   </form>
   
</div> 
)

}