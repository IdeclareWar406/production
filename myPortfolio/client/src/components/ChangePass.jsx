import Rect from 'react'
import '../index.css'

export default function ChangePass(props){


    return(<div>
        <form className='changePass'>
            <input type='password' name='currentPassword' placeholder='current password'onChange={props.userHandle} ></input>
            <input type='password' name='password' placeholder='new password' onChange={props.userHandle}></input>
        </form>
    </div>)
}