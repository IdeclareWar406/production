import React from "react"
import { ApiContext } from "../ApiContext"
import AdminNav from "./AdminNav"
import NewMission from "./NewMission"
import MissionTemplate from "./MissionTemplate"
import NewPosition from "./NewPosition"
import Serving from "./Serving.jsx"
export default function Admin(){
   const options = ['student', 'adult', 'holiday']
    document.body.style.backgroundColor ='black'
const [renderForm, setRenderForm] = React.useState({
    events: false,
    prayer:false,
    mission: false,
    serving:false,
})


const {user,prayer,events,missions,serving,prayerUpdate,startEditingPrayer,cancelPrayerEdit,updatePrayerReq,savePrayer,adminCancelEdit,adminEventEdit,updateEvent,adminEventEditing,adminEventSave,adminEventDelete,adminEventAdd, showForm, displayForm} = React.useContext(ApiContext)






function adminRender(value){
console.log(value)

    if(value === 'prayer'){
        setRenderForm(prevState=>{
            return{
                ...prevState,
                prayer: !prevState.prayer,
                events: false,
                mission: false,
                serving: false
            }
        })
    }
    if(value === 'events'){
        setRenderForm(prevState=> {
            return{
                ...prevState, 
                events: !prevState.events,
                prayer: false,
                mission: false,
                serving: false
            }
        })
    }
    if(value === 'missions'){
        setRenderForm(prevState=>{
            return{
                mission: !prevState.mission,
                events:false,
                prayer:false,
                serving:false
            }
        })
    }
    if(value === 'serving'){
        setRenderForm(prevState=>{
            return{
                serving: !prevState.serving,
                mission:false,
                events:false,
                prayer:false
            }
        })
    }

}

    

function genOptions(){
    const generatedOptions = options.map((subject)=>{
        return(
            <option>{subject} </option>
        )
    })
    return generatedOptions
}

console.log(renderForm)
let reqPrayer

if(renderForm.prayer === true){
     reqPrayer = prayer.map((pray)=>{
        if(pray.editing === false){
            return(
            <div className="adminPrayer">
                <h2>{pray.firstName} </h2>
                <h3>{pray.request} </h3>
                <div>
                    <button onClick={()=>startEditingPrayer(pray._id)}>Edit</button><button>Delete</button>
                </div>
            </div>
        )}
       else if(pray.editing === true){
            return(
            <div className="adminPrayer">
            <div className="prayerUpdateForm">
                <input className="prayerFirstNameUpdate" type="text" name="firstName" value={prayerUpdate.firstName}onChange={updatePrayerReq} ></input>
                <textarea className="prayerText" type="text" name="request" value={prayerUpdate.request} onChange={updatePrayerReq}></textarea>
                <div>
                    <button  onClick={()=> savePrayer(pray._id)}>Save</button><button onClick={()=> cancelPrayerEdit(pray._id)}>Cancel</button>
                </div>
            </div>
            </div>
        )}
    })}

let adminEvents
if(renderForm.events === true){

     adminEvents = events.map((event)=>{
        if(event.editing === false){
            return(
                <div className="adminEvents">
                    <h2>{event.title} </h2>
                    <h3>{event.description} </h3>
                    <h3>{event.subject} </h3>
                    <div>
                    <button onClick={()=> adminEventEdit(event._id)}>Edit</button><button onClick={()=> adminEventDelete(event._id)}>Delete</button>
                </div>
                </div>
            )
        }
        else if(event.editing){
            return(
                <div className="adminEvents">
                    <input  type="text" name="title" value={updateEvent.title} onChange={adminEventEditing} ></input>
                    <textarea className="eventText" type="text" name="description" value={updateEvent.description}onChange={adminEventEditing} ></textarea>
                    <select value={updateEvent.subject} onChange={adminEventEditing}> {genOptions()} </select>
                    <div>
                        <button onClick={()=> adminEventSave(event._id)}>Save</button><button onClick={()=> adminCancelEdit(event._id)}>Cancel</button>
                    </div>
                </div>
            )
        }
    })}

   

    let adminServing

    if(renderForm.serving === true){
     adminServing = serving.map((serve)=>{
        if(serve.editing === false){
            return(
                <div>
                    <h1>{serve.title} </h1>
                    <h2>{serve.description} </h2>
                    <div>
                    <button>Edit</button><button>Delete</button>
                </div>
                </div>
            )
        }
    })}
console.log(displayForm,'admin')
// work on conditional render of the add form
return(
    <>
    <div className="adminWelcome" >
        <h1 style={{color:'white'}} >Welcome {user.user.username} </h1>
    </div>
    <AdminNav render={adminRender} />
   { renderForm.events && displayForm && <div className="addEvent">
        Add a new event
        <form className="newEvent" onSubmit={adminEventAdd}>
            <input type="text" name="title" placeholder="title" onChange={adminEventEditing} ></input>
            <textarea placeholder="description" className="newEventText" type="text" name="description" onChange={adminEventEditing}></textarea>
            <select className="newEventSubject" name="subject" onChange={adminEventEditing}>{genOptions()} </select>
            <div className="removeDate">
            <h4>Remove by:</h4>
            <input className="dates" type="date" name="dateRemoved" onChange={adminEventEditing}></input> 
            </div>
            <button className="eventSubmit">Submit</button>
        </form>
    </div>}
    
    {renderForm.mission && displayForm && <NewMission />}
    {renderForm.serving && displayForm && <NewPosition />}
    <div className="adminEventContainer">
    {renderForm.prayer && reqPrayer}
    {renderForm.events && adminEvents}
    {renderForm.mission && <MissionTemplate />}
    {renderForm.serving &&  <Serving />}
    
    </div>
    </>
)

}