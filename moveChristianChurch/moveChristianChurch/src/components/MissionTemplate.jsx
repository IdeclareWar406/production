import React from "react"
import { ApiContext } from "../ApiContext"
import "../index.css"
import VolunteerForm from "./VoluneerForm"

export default function MissionTemplate(){
    const{missions , user, missionText, newMission,beginMissionEdit, cancelMissionEdit, saveMissionEdit, deleteMission, volPosId, volunteerPosition,volunteers } = React.useContext(ApiContext)
    
    
    const[volForm, setVolForm] = React.useState(false)

    function volunteerFormRender(id){
        volPosId(id)
        setVolForm(prevState =>!prevState)
        if(volunteerPosition === id){
            volPosId("")
        }
    }
let foundVol = []
function missionVol(id){
     foundVol = volunteers.filter((volunteer)=>{
        if(volunteer.position === id){
            return volunteer
        }
    })

  return  foundVol.map((vol)=>{
        return `${vol.firstName} ${vol.lastName}`
    })   
}
const path = window.location
// need a register option and form 
    const scheduledMissions = missions.map((mission)=>{
            if(!mission.editing){
        return(
            <div className="plannedMissions">
                
                <h2>Mission: {mission.title} </h2>
                <h3>Location: {mission.location} </h3>
                <h3>Description: {mission.description} </h3>
             {  path.pathname != "/admin" &&  <button onClick={()=> volunteerFormRender(mission._id)}>Register</button>}
                {user.user.isAdmin && user.token && <div>
                    <h3>Volunteers {missionVol(mission._id)}</h3>
                    <button onClick={()=> beginMissionEdit(mission._id)}>Edit</button><button onClick={()=> deleteMission(mission._id)}>Delete</button>
                    </div>}
            </div>
        )}
        else if(mission.editing){
            return(
                <div className="editMission">
                    <h1>Planned Mission Trips</h1>
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
        <div className="servingVolContainer">
        <div className="missionContainer">
            <h1 className="missionTitle">Missions</h1>
            {scheduledMissions}
        </div>

      {volForm &&  <VolunteerForm />}

        </div>
    )
}