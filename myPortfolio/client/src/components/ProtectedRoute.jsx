import React from 'react'
import { ApiContext } from '../ApiContext'
import {Navigate} from 'react-router-dom'

export default function ProtectedRoute(props){
const {user} = React.useContext(ApiContext)

if(window.location.pathname === '/admin'){
return user.user.isAdmin && user.token ? props.children : <Navigate to='/login' />}

else
    return user.token && !user.user.isAdmin ? props.children: <Navigate to='/login' />
}