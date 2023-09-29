import React from 'react'



export default function ClientTemplate(props){
    const{user} = props
    console.log(user.editing)

    if(!user.editing){
    return(
        <div className='profileData'>
            <h2>Hello {user.firstName || 'firstname'} {user.lastName || user.username} </h2>
            <h2>Username: {user.username} </h2>
            <h3>Email: {user.email} </h3>
            <h3>Phone: {user.phone} </h3>
            <div>
                <button onClick={props.beginEdit}>Edit Profile</button><button onClick={()=> props.deleteUser(user._id)}>Delete</button>
            </div>
        </div>
    )}
    if(user.editing){
        return(
            <div className='profileData'>
                <input type='text' name='firstName'placeholder='first name' onChange={props.userEdit} value={props.updateUser.firstName}></input> <input type='text' name='lastName' placeholder='lastName' onChange={props.userEdit} value={props.updateUser.lastName}></input>
                <input type='text' name='username' placeholder='username'onChange={props.userEdit} value={props.updateUser.username}></input>
                <input type='email' name='email' placeholder='email' onChange={props.userEdit} value={props.updateUser.email}></input>
                <input type='phone' name='phone' placeholder='phone number'onChange={props.userEdit} value={props.updateUser.phone}></input>
                <div>
                    <input type="password" name='currentPassword' placeholder='current password'></input>
                    <input type='passsword' name='password' placeholder='new password'></input>
                </div>
                <div>
                    <button onClick={()=> props.userSave(user._id)}>Save</button><button onClick={props.cancelEdit}>Cancel</button>
                </div>
            </div>
        )
    }
}