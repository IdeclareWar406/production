import React from "react"
import "../index.css"
import AboutNav from "./AboutNav.jsx"
import AtMove from "./AtMove.jsx"
import OurBeliefs from "./OurBeliefs.jsx"
import GrowInChrist from "./GrowInChrist"
import OurLeadership from "./OurLeadership"

export default function About(){
document.body.style.backgroundColor = "black"
    const [aboutRender, setAboutRender] = React.useState({
        atMove: true,
        ourBeliefs: false,
        growInChrist: false,
        ourLeadership: false,
    })

    function render(value){
        if(value === 'atMove'){
            setAboutRender(prevState=>{
                return{
                    ...prevState,
                    atMove: true,
                    ourBeliefs:false,
                ourLeadership:false,
                growInChrist:false
                }
            })
        }
        else if(value === 'ourBelief'){
            setAboutRender(prevState=>{
             return {
                ...prevState,
                atMove:false,
                ourBeliefs:true,
                ourLeadership:false,
                growInChrist:false
             }
            })
        }
        else if (value === 'growInChrist'){
            setAboutRender(prevState=>{
                return{
                    ...prevState,
                    atMove:false,
                    ourBeliefs:false,
                    ourLeadership:false,
                    growInChrist:true
                }
            })
        }
        else if( value === 'ourLeadership'){
            setAboutRender(prevState=>{
                return{
                    ...prevState,
                    atMove:false,
                    ourBeliefs:false,
                    ourLeadership:true,
                    growInChrist:false
                }
            })
        }




    }
    console.log(aboutRender)

    return(
     <div>
        <div className="aboutBody">
            <div className="aboutNav">
            <AboutNav render={render} />
            </div>
            <div className="aboutRender">
        { aboutRender.atMove &&   <AtMove />}
        {aboutRender.ourBeliefs && <OurBeliefs />}
        {aboutRender.growInChrist && <GrowInChrist />}
        {aboutRender.ourLeadership && <OurLeadership />}
            </div>
        </div>
        <div className="homeFooter">
            <h2 className="ourAddress" style={{color: "white"}} > Our location is 1501 Whispering Pines Rd, Albany, GA</h2><a  className="directions" href="https://www.google.com/maps/place/Move+Christian+Church/@31.605381,-84.185001,15z/data=!4m6!3m5!1s0x88f27bf5efc37f83:0x8436521efbd5f2d!8m2!3d31.6054188!4d-84.1845076!16s%2Fg%2F1tp0fhnr?entry=ttu" target="_blank">Directions</a> 
            <h2  className="ourEmail" style={{color:"white"}} >Email us at staff@movechristianchurch.com with any questions you may have</h2>
        </div>
     </div>
    )
}