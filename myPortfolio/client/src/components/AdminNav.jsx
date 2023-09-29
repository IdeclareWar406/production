import React from "react"
import "../index.css"

export default function AdminNav(props){

    const adminPath = window.location.pathname
    return(
        <div className="adminNavTemplate">
          {adminPath ==="/admin" && <h2 onClick={()=> props.render('clients')}>Clients</h2>}
            <h2 onClick={()=> props.render('projects')}>Projects</h2>
            <h2 onClick={()=> props.render('users')}>Users</h2>
        </div>
    )
}