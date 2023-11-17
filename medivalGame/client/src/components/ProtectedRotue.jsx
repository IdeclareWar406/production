import React from "react"
import { GameContext } from "../GameContext"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute(props){
    const {user} = React.useContext(GameContext)
   
  return  user.token? props.children : <Navigate to="/" />
}