import React from "react"
import { ApiContext } from "../ApiContext"
import EventRender from "./EventRender"

export default function Events(){
const {events} = React.useContext(ApiContext)
const[displayAdult, setDisplayAdult] = React.useState(false)
const [displayStudent, setDisplayStudent]= React.useState(false)
const [displayHoliday, setDisplayHoliday] = React.useState(false)
    console.log(events)
    document.body.style.backgroundColor ='black'
    function renderWhich(value){
        if(value === 'student'){
            setDisplayStudent(prevState=> !prevState)
            setDisplayAdult(false)
            setDisplayHoliday(false)
        }
        else if(value === 'adult'){
            setDisplayAdult(prevState=> !prevState)
            setDisplayStudent(false)
            setDisplayHoliday(false)
        }
        else if(value === 'holiday'){
            setDisplayHoliday(prevState=>!prevState)
            setDisplayAdult(false)
            setDisplayStudent(false)
        }
    }
   // once we can get all users add the displayed user into the event
    const allEvents = events.map((event)=>{
        return(
            <div className="eventContainer">
                <h1>{event.title} </h1>
                <h2>{event.description} </h2>
            </div>
        )
    })

    const studentEvents= events.filter((event)=>{
        if(event.subject === "student"){
            return (
              event
            )
        }
    })

    const renderStudentEvent = studentEvents.map((event)=>{
        return(
            <div className="eventContainer">
            <h1>{event.title} </h1>
            <h2>{event.description} </h2>
        </div>
        )
    })

    const adultEvents = events.filter((event)=>{
        if(event.subject === 'adult'){
            return event
        }
    })

    const renderedAdultEvents = adultEvents.map((event)=>{
        return(
            <div className="eventContainer">
            <h1>{event.title} </h1>
            <h2>{event.description} </h2>
        </div>
        )
    })


    const holidayEvents = events.filter((event)=>{
        if(event.subject === 'holiday'){
            return event
        }
    })

    const renderedHoliday = holidayEvents.map((event)=>{
        return(
            <div className="eventContainer">
            <h1>{event.title} </h1>
            <h2>{event.description} </h2>
        </div>
        )
    })
    
    return(
        <>
        <div className="eventTitle">
            <h1>Current and upcoming events</h1>
        </div>
        <EventRender
            render={renderWhich}
    />
        <h1 className="eventGroup">Event Groups</h1>
        <div className="eventParent">
            {!displayAdult && !displayHoliday && !displayStudent && allEvents }
            {displayStudent && renderStudentEvent}
            {displayAdult && renderedAdultEvents}
            {displayHoliday && renderedHoliday}
        </div>
        <div className="eventFooter">
            <h2 style={{color: "white"}} > Our location is 1501 Whispering Pines Rd, Albany, GA</h2><a  className="directions" href="https://www.google.com/maps/place/Move+Christian+Church/@31.605381,-84.185001,15z/data=!4m6!3m5!1s0x88f27bf5efc37f83:0x8436521efbd5f2d!8m2!3d31.6054188!4d-84.1845076!16s%2Fg%2F1tp0fhnr?entry=ttu" target="_blank">Directions</a> 
            <h2 style={{color:"white"}} >Email us at staff@movechristianchurch.com with any questions you may have</h2>
        </div>
        </>
    )
}