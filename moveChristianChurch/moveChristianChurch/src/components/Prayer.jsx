import React from "react"
import { ApiContext } from "../ApiContext"
import PrayerRequest from "./PrayerRequest"
import "../index.css"

export default function Prayer(){

    const {prayer} = React.useContext(ApiContext)

   



    let prayers
    if(prayer.length > 0){
    prayers = prayer.map((request)=>{
        return(
            <div key={request._id} className="prayers">
                {request.displayName ? <h2>Name: {request.firstName} </h2> : <h2>A follower of Christ</h2>}
                <h3>{request.request} </h3>
            </div>
        )
    })
    }

    return(
        <div>
            <PrayerRequest />
            <div className="displayedPrayers">
                <h1>Prayer Request</h1>
                {prayers}
            </div>
            <div className="homeFooter">
            <h2 style={{color: "white"}} > Our location is 1501 Whispering Pines Rd, Albany, GA</h2><a  className="directions" href="https://www.google.com/maps/place/Move+Christian+Church/@31.605381,-84.185001,15z/data=!4m6!3m5!1s0x88f27bf5efc37f83:0x8436521efbd5f2d!8m2!3d31.6054188!4d-84.1845076!16s%2Fg%2F1tp0fhnr?entry=ttu" target="_blank">Directions</a> 
            <h2 style={{color:"white"}} >Email us at staff@movechristianchurch.com with any questions you may have</h2>
        </div>
        </div>
    )
}