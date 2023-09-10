import React from "react"
import "../index.css"
import { ApiContext } from "../ApiContext.jsx"

export default function NewMission(){


const {newMissionTrip, missionText, passCheck} = React.useContext(ApiContext)
   
    return(
        <>
        <div className="newMission">
            <h2>New Mission Trip</h2>
            <form className="missionForm" onSubmit={newMissionTrip} >
                <input type="text" name="title" placeholder="title" onChange={missionText} ></input>
                <input type="text" name="location" placeholder="location" onChange={missionText} ></input>
                <textarea style={{height: '150px', width: "300px"}} type='text' className="missionText" name="description" placeholder="description" onChange={missionText} ></textarea>
                <button >Submit</button>
            </form>
            {passCheck && <h2 style={{color:'red'}}>All fields are required</h2>}
        </div>
        </>
    )
}