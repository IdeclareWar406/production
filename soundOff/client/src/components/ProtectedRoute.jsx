import React from 'react'
import { ApiContext } from '../ApiContext'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props){
const {user} = React.useContext(ApiContext)

    return user.token? props.children : <Navigate to='/login' />

}