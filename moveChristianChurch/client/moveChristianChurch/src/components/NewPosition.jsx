import React from "react"
import { ApiContext } from "../ApiContext"
import "../index.css"

export default function NewPosition(){
const { serviceChangeHandler, newServing,beginServingEdit, saveServeEdit,cancelServeEdit,deleteService, serving}= React.useContext(ApiContext)




    return(
        <div className="newServingPostion">
            <h2 style={{color: 'white'}}>New Position</h2>
            <form className="servingPositionForm" onSubmit={newServing}>
                <input className="servingTitle" type="text" name="title" placeholder="title" onChange={serviceChangeHandler}></input>
                <textarea className="servingDescription" type="text" name="description" placeholder="description of volunteer position" onChange={serviceChangeHandler}></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}