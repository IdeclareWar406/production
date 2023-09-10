import React from "react"
import { ApiContext } from "../ApiContext"
import AdminNav from "./AdminNav"
import NewMission from "./NewMission"
import MissionTemplate from "./MissionTemplate"
import NewPosition from "./NewPosition"
import Serving from "./Serving.jsx"
import NewUser from "./NewUser"
import VolunteersPrint from "./VolunteersPrint"
export default function Admin(){
   const options = ['student', 'adult', 'holiday']
    document.body.style.backgroundColor ='black'
const [renderForm, setRenderForm] = React.useState({
    events: false,
    prayer:false,
    mission: false,
    serving:false,
    users: false,
    volunteers: false
})


const {user,prayer,events,missions,serving,prayerUpdate,startEditingPrayer,cancelPrayerEdit,updatePrayerReq,savePrayer,adminCancelEdit,adminEventEdit,updateEvent,adminEventEditing,adminEventSave,adminEventDelete,adminEventAdd, showForm, displayForm, allUsers,adminUserCancel, adminUserHandleChange, adminUserUpdate, adminUserSave, adminUserDelete,updateUser,deletePrayer, resetVerification,passCheck,userAxios, assignVolunteers} = React.useContext(ApiContext)






function adminRender(value){
console.log(value)
resetVerification()
    if(value === 'prayer'){

        setRenderForm(prevState=>{
            return{
                ...prevState,
                prayer: !prevState.prayer,
                events: false,
                mission: false,
                serving: false,
                users:false,
                volunteers:false
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
                serving: false,
                users:false,
                volutneers:false
            }
        })
    }
    if(value === 'missions'){
        setRenderForm(prevState=>{
            return{
                mission: !prevState.mission,
                events:false,
                prayer:false,
                serving:false,
                users:false,
                volunteers:false
            }
        })
    }
    if(value === 'serving'){
        setRenderForm(prevState=>{
            return{
                serving: !prevState.serving,
                mission:false,
                events:false,
                prayer:false,
                users:false,
                volunteers:false
            }
        })
    }

    if (value === 'user'){
        setRenderForm(prevState=> {
            return{
                serving:false,
                mission:false,
                events: false,
                prayer:false,
                users:!prevState.users,
                volunteers:false
            }
        })
    }
   if(value === 'volunteer'){
    setRenderForm(prevState=> {
        return{
            serving:false,
            mission:false,
            events: false,
            prayer:false,
            users:false,
            volunteers:!prevState.volunteers
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


let reqPrayer

if(renderForm.prayer === true){
     reqPrayer = prayer.map((pray)=>{
        if(pray.editing === false){
            return(
            <div className="adminPrayer">
                <h2>{pray.firstName} </h2>
                <h3>{pray.request} </h3>
                <div>
                    <button onClick={()=>startEditingPrayer(pray._id)}>Edit</button><button onClick={()=> deletePrayer(pray._id)}>Delete</button>
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

    let userData
    console.log(allUsers)
    if(renderForm.users === true){
    userData = allUsers.map((user)=>{
        if(user.editing === false){
            return(
            <div className="allUsers">
                <h2> Username: {user.username} </h2>
                <h2>Name: {user.firstName} {user.lastName} </h2>
                <h2>Permissions: {user.isAdmin ? "Administrator" : "not authorized"} </h2>
                {!user.editing&& <div className="userEdit">
                    <button onClick={()=> adminUserUpdate(user._id)}>Edit</button><button onClick={()=> adminUserDelete(user._id)}>Remove</button>
                </div> }
            </div>)
        }
        else if(user.editing === true){
            return(
                <div className="allUsers">
                    <input type="text" name="username" placeholder="username" onChange={adminUserHandleChange} value={updateUser.username}></input>
                   <input type="text" name="firstName" placeholder="First Name" onChange={adminUserHandleChange} value={updateUser.firstName} ></input><input type="text" name="lastName" placeholder="Last Name" onChange={adminUserHandleChange} value={updateUser.lastName}></input>
                   <input type="text" name="email" placeholder="email" onChange={adminUserHandleChange} value={updateUser.email}></input>
                   <input type="text" name="phone" placeholder="phone number" onChange={adminUserHandleChange} value={updateUser.phone}></input>
                   <span>Do not fill out if you are not changing password</span>
                   <div>
                   <input type="password" name="currentPassword" placeholder="currentPassword"></input>
                   <input type="password" name="newPassword" placeholder="New Password"></input>
                   </div>
                    <div>
                   <span>Administrator?</span>  <input type="radio" value={true} name="isAdmin"onChange={adminUserHandleChange} ></input><span>Yes</span> <input type="radio" name="isAdmin" value={false} onChange={adminUserHandleChange}></input><span>No</span>
                   
                    </div>
                    {user.editing&& <div className="userEdit">
                        <button onClick={()=> adminUserSave(user._id)}>Save</button><button onClick={()=> adminUserCancel(user._id)}>Cancel</button>
                    </div> }
                </div>)
        }
    })
    }


React.useEffect(()=>{
userAxios.get(`/api/auth/volunteers`)
        .then(res => assignVolunteers(res.data))
},[])

return(
    <>
    <div className="adminWelcome" >
        <h1 style={{color:'white'}} >Welcome {user.user.firstName} </h1>
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
        {passCheck && <h2 style={{color:'red'}}>All fields are required</h2>}
    </div>}
    {renderForm.users && displayForm && <NewUser />}
    {renderForm.mission && displayForm && <NewMission />}
    {renderForm.serving && displayForm && <NewPosition />}
    <div className="adminEventContainer">
    {renderForm.prayer && reqPrayer}
    {renderForm.events && adminEvents}
    {renderForm.mission && <MissionTemplate />}
    {renderForm.serving &&  <Serving />}
    {renderForm.users && userData}
    {renderForm.volunteers && <VolunteersPrint />}
    
    </div>


    <div className="homeFooter">
            <h2 style={{color: "white"}} > Our location is 1501 Whispering Pines Rd, Albany, GA</h2><a  className="directions" href="https://www.google.com/maps/place/Move+Christian+Church/@31.605381,-84.185001,15z/data=!4m6!3m5!1s0x88f27bf5efc37f83:0x8436521efbd5f2d!8m2!3d31.6054188!4d-84.1845076!16s%2Fg%2F1tp0fhnr?entry=ttu" target="_blank">Directions</a> 
            <h2 style={{color:"white"}} >Email us at staff@movechristianchurch.com with any questions you may have</h2>
        </div>
    </>
)

}