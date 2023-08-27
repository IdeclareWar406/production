import React from "react"
import { ApiContext } from "../ApiContext"
import "../index.css"

export default function MissionTemplate(){
    const{missions , user, missionText, newMission,beginMissionEdit, cancelMissionEdit, saveMissionEdit, deleteMission } = React.useContext(ApiContext)
    
    console.log(missions)

    const scheduledMissions = missions.map((mission)=>{
            if(!mission.editing){
        return(
            <div className="plannedMissions">
                <h1>{mission.title} </h1>
                <h2>{mission.location} </h2>
                <h2>{mission.description} </h2>
                {user.token && <div>
                    <button onClick={()=> beginMissionEdit(mission._id)}>Edit</button><button onClick={()=> deleteMission(mission._id)}>Delete</button>
                    </div>}
            </div>
        )}
        else if(mission.editing){
            return(
                <div className="editMission">
                    <input type="text" name="title" onChange={missionText} value={newMission.title}></input>
                    <input type="text" name="location" onChange={missionText} value={newMission.location}></input>
                    <textarea style={{height:'150px', width:'250px'}} name="description" onChange={missionText} value={newMission.description}></textarea>
                    <div>
                        <button onClick={()=> saveMissionEdit(mission._id)}>Save</button><button onClick={()=> cancelMissionEdit(mission._id)}>Cancel</button>
                    </div>
                </div>
            )
        }
    })


    return(
        <div>
            {scheduledMissions}
        </div>
    )
}