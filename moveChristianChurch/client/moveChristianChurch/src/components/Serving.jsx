import React from "react"
import "../index.css"
import { ApiContext } from "../ApiContext"

export default function Serving(){

    const { serviceChangeHandler,beginServingEdit, saveServeEdit,cancelServeEdit,deleteService, serving, user, newService}= React.useContext(ApiContext)

    const postedRoles = serving.map((serve)=>{
        if(serve.editing === false){
            return(
                <div className="positionsAvailable">
                    <h2>Position: {serve.title} </h2>
                    <h3 style={{width: "400px"}}>Description: {serve.description} </h3>
                    {user.token && <div className="positionButtons">
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
        {postedRoles}
        </>
    )

}


