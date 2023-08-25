import React from "react"
import { ApiContext } from "../ApiContext"
import AdminNav from "./AdminNav"


export default function Admin(){
    document.body.style.backgroundColor ='black'
const [renderForm, setRenderForm] = React.useState({
    events: false,
    prayer:false,
    mission: false,
    serving:false,
})


const {user,prayer,events,missions,serving,prayerUpdate,startEditingPrayer,cancelPrayerEdit,updatePrayerReq,savePrayer} = React.useContext(ApiContext)


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

    const adminEvents = events.map((event)=>{
        if(event.editing === false){
            return(
                <div>
                    <h2>{event.title} </h2>
                    <h3>{event.description} </h3>
                    <h3>{event.subject} </h3>
                    <div>
                    <button>Edit</button><button>Delete</button>
                </div>
                </div>
            )
        }
    })
    const adminMission = missions.map((mission)=>{
        if(mission.editing === false){
            return(
                <div>
                    <h1>{mission.title} </h1>
                    <h2>{mission.location} </h2>
                    <h3>{mission.description} </h3>
                    <div>
                    <button>Edit</button><button>Delete</button>
                </div>
                </div>
            )
        }
    })

    const adminServing = serving.map((serve)=>{
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
    })


return(
    <>
    <div className="adminWelcome" >
        <h1 style={{color:'white'}} >Welcome {user.user.username} </h1>
    </div>
    <AdminNav render={adminRender} />
    <div>
    {renderForm.prayer && reqPrayer}
    </div>
    </>
)

}