import React from "react"
import "../index.css"
import { ApiContext } from "../ApiContext"

export default function VolunteersPrint(){
const {volunteers,user, volunteerHandleChange, beginVolunteerEdit, saveVolunteer, deleteVolunteer, cancelVolunteerEdit, newVolunteer} = React.useContext(ApiContext)

    const ourVolunteers = volunteers.map((vol)=>{
        if(vol.editing === false){
        return(
            <div className="printedVol">
                <h2>Name: {vol.firstName} {vol.lastName} </h2>
                <h3>Contact Info: {vol.email}</h3>
                <h3>phone: {vol.phone}</h3>
                {user.user.isAdmin && <div className="printedVolButton">
                    <button onClick={()=> beginVolunteerEdit(vol._id)}>Edit</button> <button onClick={()=> deleteVolunteer(vol._id)}>Delete</button>
                    </div>}
            </div>
        )}
        else if(vol.editing === true){
            return(
            <div className="printedVol">
                <input type="text" name="firstName" placeholder="first name" onChange={volunteerHandleChange} value={newVolunteer.firstName}></input><input type="text" name="lastName" placeholder="last name" onChange={volunteerHandleChange} value={newVolunteer.lastName}></input>
                <input type="email" name="email" placeholder="email" onChange={ volunteerHandleChange} value={newVolunteer.email}></input>
                <input type="phone" name="phone" placeholder="phone" onChange={volunteerHandleChange} value={newVolunteer.phone}></input>
                {user.user.isAdmin && <div className="printedVolButton">
                    <button onClick={()=> saveVolunteer(vol._id)}>Save</button><button onClick={()=> cancelVolunteerEdit(vol._id)}>Cancel</button>
                </div> }
            </div>
        )}
    })




return(<div className="printedVolCont">
    {ourVolunteers}
</div>)


}