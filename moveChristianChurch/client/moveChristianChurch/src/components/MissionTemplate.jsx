import React from "react"
import { ApiContext } from "../ApiContext"


export default function MissionTemplate(){
    const{missions , user, missionText, newMission } = React.useContext(ApiContext)
    
    console.log(missions)

    const scheduledMissions = missions.map((mission)=>{
            if(!mission.editing){
        return(
            <div className="plannedMissions">
                <h1>{mission.title} </h1>
                <h2>{mission.location} </h2>
                <h2>{mission.description} </h2>
                {user.token && <div>
                    <button>Edit</button><button>Delete</button>
                    </div>}
            </div>
        )}
        else if(mission.editing){
            return(
                <div>
                    <input type="text" name="title" onChange={missionText} value={newMission.title}></input>
                    <input type="text" name="location" onChange={missionText} value={newMission.location}></input>
                    <textarea name="description" onChange={missionText} value={newMission.description}></textarea>
                    <div>
                        <button>Save</button><button>Cancel</button>
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