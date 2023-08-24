import React from "react"


export default function PrayerRequest(){


    return(
        <>
        <form>
            <input type="text" name="name" ></input>
            <input type="text" name="request"></input>
            <input type="radio" name="displayName"></input>
        </form>
        </>
    )
}