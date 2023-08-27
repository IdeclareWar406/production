import React from "react"
import "../index.css"
import { ApiContext } from "../ApiContext"

export default function AdminNav(props){

    const {showForm, displayForm}= React.useContext(ApiContext)



    return(
        <div className="adminNav">
            <h2 className="prayer"  onClick={showForm}>Add new</h2>
            <h2 className="prayer" onClick={()=> props.render('prayer')}>Prayer Request</h2>
            <h2 className="prayer"  onClick={()=> props.render('events')}>Events</h2>
            <h2 className="prayer"  onClick={()=> props.render('missions')}>Missions</h2>
            <h2 className="prayer"  onClick={()=> props.render('serving')}>Serving</h2>
        </div>
    )

}