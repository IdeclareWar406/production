import React from 'react'
import "../index.css"
import { ApiContext } from '../ApiContext'
import ChangePass from './ChangePass'

export default function UserTemplate(props){


console.log(props.editing)
// move functions made in admin to api context. input the api call to get info into the sign in sequence
console.log(props.update, 'updater')
    if(!props.editing){
    return(
        <div className='adminRenderTemplate'>
           {props.email && <h2>Email: {props.email} </h2>}
           {props.phone && <h2>Phone: {props.phone} </h2>}
           {props.username && <h2>Username: {props.username} </h2>}
         
           <div>
            <button onClick={()=> props.beginEdit(props.id)}>Edit</button> <button onClick={()=> props.deleteUser(props.id)}>Delete</button>
           </div>
        </div>
    )}

   else if(props.editing){
        console.log('this is true')
        return(
        <div className='adminRenderTemplate'>
            <input type='email' name='email' onChange={props.userHandle} value={props.update.email}></input>
            <input type='phone' name='phone' onChange={props.userHandle} value={props.update.phone} ></input>
           <input type='text' name='username' onChange={props.userHandle} value={props.update.username}></input>
           <ChangePass  userHandle={props.userHandle} />
           <div>
            <button onClick={()=> props.saveEdit(props.id)}>Save</button> <button onClick={()=> props.cancelEdit(props.id)}>Cancel</button>
           </div>
        </div>)
    }
}