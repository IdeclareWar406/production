import React from "react"
import {Navigate} from 'react-router-dom'
import { ApiContext } from "../ApiContext"


export default function ProtectedRoute(props){
const{user} = React.useContext(ApiContext)

return user.user.isAdmin && user.token ? props.children :  <Navigate to="/login"/>

}