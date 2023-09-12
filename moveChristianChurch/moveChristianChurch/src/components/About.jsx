import React from "react"
import "../index.css"
import AboutNav from "./AboutNav.jsx"
import AtMove from "./AtMove.jsx"
import OurBeliefs from "./OurBeliefs.jsx"

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
            </div>
        </div>
     </div>
    )
}