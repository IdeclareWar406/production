import React from "react"
import { ApiContext } from "../ApiContext"

export default function PrayerRequest(){
document.body.style.backgroundColor = "black"

const {newPrayerInfo, submitPrayer,newPrayer} = React.useContext(ApiContext)
const [failedSend, setFailedSend] = React.useState(false)

    function verification(event){
       event.preventDefault()
        
        if(newPrayer.firstName && newPrayer.request  != ""){
            console.log('this fired')
            submitPrayer()
            if(failedSend === true){
                setFailedSend(false)
            }
        }
        else setFailedSend(true)
    }
    return(
        <>
        <div className="prayerFormContainer">
        <h1 style={{color:'white'}} >If you have any request for prayer please fill the form out below</h1>
        <form className="prayerForm" onSubmit={verification}>
            <input className="prayerName" type="text" name="firstName" width={'200px'} placeholder="First name only" onChange={newPrayerInfo}></input>
            <textarea className="prayerRequest" type="text" name="request" placeholder="Your prayer request" onChange={newPrayerInfo}></textarea>
            <h2 style={{color:'white'}} >Would you like to display your name on this request which will post to this page?</h2>
            <div>
            <input type="radio" name="displayName" value={true} onChange={newPrayerInfo} ></input><span style={{color:'white'}} >Yes</span>
            <input type="radio" name="displayName" value={false} onChange={newPrayerInfo} ></input><span style={{color:'white'}} >No</span>
            
            </div>
            <button>Submit</button>
            {failedSend && <h2 style={{color:'red'}}>All fields are required</h2>}
        </form>
        </div>
        </>
    )
}