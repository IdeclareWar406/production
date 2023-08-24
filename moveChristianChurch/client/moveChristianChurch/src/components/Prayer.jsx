import React from "react"
import { ApiContext } from "../ApiContext"
import PrayerRequest from "./PrayerRequest"
import "../index.css"

export default function Prayer(){

    const {prayer} = React.useContext(ApiContext)

    console.log(prayer)



    let prayers
    if(prayer.length > 0){
    prayers = prayer.map((request)=>{
        return(
            <div className="prayers">
                {request.displayName ? <h2>Name: {request.name} </h2> : <h2>A follower of Christ</h2>}
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
        </div>
    )
}