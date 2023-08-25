import React from "react"
import "../index.css"


export default function AdminNav(props){

    return(
        <div className="adminNav">
            <h2 onClick={()=> props.render('prayer')}>Prayer Request</h2>
            <h2 onClick={()=> props.render('events')}>Events</h2>
            <h2 onClick={()=> props.render('missions')}>Missions</h2>
            <h2 onClick={()=> props.render('serving')}>Serving</h2>
        </div>
    )

}