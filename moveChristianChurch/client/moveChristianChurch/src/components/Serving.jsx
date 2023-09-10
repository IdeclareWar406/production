import React from "react"
import "../index.css"
import { ApiContext } from "../ApiContext"
import VolunteerForm from "./VoluneerForm"

export default function Serving(){

    const { serviceChangeHandler,beginServingEdit, saveServeEdit,cancelServeEdit,deleteService, serving, user, newService, volPosId, volunteerPosition, volunteers}= React.useContext(ApiContext)

    const[volForm, setVolForm] = React.useState(false)

    function volunteerFormRender(id){
        volPosId(id)
        setVolForm(prevState =>!prevState)
        if(volunteerPosition === id){
            volPosId("")
        }
    }
    let foundVol = []
    function servingVol(id){
        foundVol = volunteers.filter((vol)=>{
            if(vol.position === id){
                return vol
            }
        })
        if(foundVol.length < 4){
        return foundVol.map((vol)=>{
            return `${vol.firstName} ${vol.lastName} phone:${vol.phone}`
        })}

        else return 'Many'
    }

    const postedRoles = serving.map((serve)=>{
        if(serve.editing === false){
            return(
                <div className="positionsAvailable">
                    <h2>Position: {serve.title} </h2>
                    <h3 style={{width: "400px"}}>Description: {serve.description} </h3>
                    <button onClick={()=> volunteerFormRender(serve._id)}>Volunteer</button>
                    {user.user.isAdmin && <div>
                        <h3>Volunteers: </h3>
                        <h3>{servingVol(serve._id)} </h3>
                    </div> }
                    {user.user.isAdmin && <div className="positionButtons">
                            <button onClick={()=> beginServingEdit(serve._id)}>Edit</button><button onClick={()=>deleteService(serve._id)}>Delete</button>
                        </div>}
                </div>
            )
        }
        else if(serve.editing === true){
            return(
                <div className="positionsAvailable">
                    <input type="text" name="title" onChange={serviceChangeHandler} value={newService.title}></input>
                    <textarea style={{width: "250px", height: '150px'}} name="description" value={newService.description} onChange={serviceChangeHandler}></textarea>
                    <div className="positionButtons">
                        <button onClick={()=> saveServeEdit(serve._id)}>Save</button><button onClick={()=> cancelServeEdit(serve._id)}>Cancel</button>
                    </div>
                </div>
            )
        }
    })


    return(
        <>
        <div className="servingVolContainer">
        <div className="servingContainer">
        <h1 className="servingHeader">Serving</h1>
        {postedRoles}
        </div>
      {volForm && <VolunteerForm />}
        </div>
        </>
    )

}


