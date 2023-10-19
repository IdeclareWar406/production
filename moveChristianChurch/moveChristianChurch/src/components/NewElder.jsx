import React from "react"

import { ApiContext } from "../ApiContext"

export default function NewElder(){
    const {elderUpdate, handleElderUpdate, newElder} = React.useContext(ApiContext)




    return(
        <div className="newMission">
            <form className="missionForm" onSubmit={newElder}>
                <input type="text" name="name" onChange={handleElderUpdate} value={elderUpdate.name} placeholder="full name"></input>
                <input type="date" name="elderSince" onChange={handleElderUpdate} value={elderUpdate.elderSince}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}