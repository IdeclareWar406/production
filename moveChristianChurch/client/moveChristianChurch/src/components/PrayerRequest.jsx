import React from "react"


export default function PrayerRequest(){
document.body.style.backgroundColor = "black"

    return(
        <>
        <div className="prayerFormContainer">
        <h1 style={{color:'white'}} >If you need prayer please fill out the form below</h1>
        <form className="prayerForm">
            <input className="prayerName" type="text" name="name" width={'200px'} placeholder="First name only"></input>
            <textarea className="prayerRequest" type="text" name="request" placeholder="Your prayer request"></textarea>
            <h2 style={{color:'white'}} >Would you like to display your name on this request which will post to this page?</h2>
            <div>
            <input type="radio" name="displayName" value={true}></input><span style={{color:'white'}}>Yes</span>
            <input type="radio" name="displayName" value={false}></input><span style={{color:'white'}} >No</span>
            </div>
        </form>
        </div>
        </>
    )
}