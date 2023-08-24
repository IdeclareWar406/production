import React from "react"
import { ApiContext } from "../ApiContext"
import PrayerRequest from "./PrayerRequest"

export default function Prayer(){

    const {prayer} = React.useContext(ApiContext)

    


    return(
        <div>
            <PrayerRequest />
        </div>
    )
}