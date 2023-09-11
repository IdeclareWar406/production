import React from "react"
import MinistriesNav from "./MinistriesNav"
import MissionTemplate from "./MissionTemplate"
import Serving from "./Serving"
import StudentMinisties from "./StudentMinistry"
import InfantChildren from "./InfantChildren"
import Mens from "./Mens"
import Women from "./Women"
import { ApiContext } from "../ApiContext"

export default function Ministries(){
    const{resetVerification} = React.useContext(ApiContext)
document.body.style.backgroundColor = 'black'
const [displayMission, setDisplayMission] = React.useState(false)
const[displayServing, setDisplayServing] = React.useState(false)
const[displayStudent, setDisplayStudent] = React.useState(false)
const[displayChildren, setDisplayChildren] = React.useState(false)
const [displayMens, setDisplayMens] = React.useState(false)
const [displayWomen, setDisplayWomen] = React.useState(false)
const [displayWorship, setDisplayWorship] = React.useState(false)


    function renderWhich(value){
        resetVerification()
        if(value === 'mission'){
            setDisplayMission(prevState=> !prevState)
            setDisplayServing(false)
            setDisplayChildren(false)
            setDisplayStudent(false)
            setDisplayMens(false)
            setDisplayWomen(false)
            setDisplayWorship(false)
        }
        else if(value === 'serving'){
            setDisplayServing(prevState=> !prevState)
            setDisplayChildren(false)
            setDisplayStudent(false)
            setDisplayMens(false)
            setDisplayWomen(false)
            setDisplayWorship(false)
            setDisplayMission(false)
        }
        else if(value === 'student'){
            setDisplayStudent(prevState=> !prevState)
            setDisplayMens(false)
            setDisplayWomen(false)
            setDisplayWorship(false)
            setDisplayMission(false)
            setDisplayChildren(false)
            setDisplayServing(false)
        }
        else if(value === 'children'){
            setDisplayChildren(prevState => !prevState)
            setDisplayMens(false)
            setDisplayWomen(false)
            setDisplayWorship(false)
            setDisplayMission(false)
            setDisplayServing(false)
            setDisplayStudent(false)
        }
        else if(value === 'mens'){
            setDisplayMens(prevState => !prevState)
            setDisplayMission(false)
            setDisplayServing(false)
            setDisplayStudent(false)
            setDisplayWomen(false)
            setDisplayWorship(false)
            setDisplayChildren(false)
        }
        else if(value === 'women'){
            setDisplayWomen(prevState=> !prevState)
            setDisplayMission(false)
            setDisplayServing(false)
            setDisplayStudent(false)
            setDisplayMens(false)
            setDisplayWorship(false)
            setDisplayChildren(false)
        }
        else if(value === 'worship'){
            setDisplayWorship(prevState => !prevState)
            setDisplayMission(false)
            setDisplayServing(false)
            setDisplayStudent(false)
            setDisplayMens(false)
            setDisplayWomen(false)
            setDisplayChildren(false)
        }
    }

    



    return(
        <>
        
        <div className="ministryRenderContainer">
         {/* children of body div */}
        <div className="ministryNavigation">
        <MinistriesNav render={renderWhich} />
        </div>

            <div>
      {!displayChildren && !displayMens && !displayMission && !displayServing && !displayStudent && !displayWomen && <h1 className="ourMinistries">Our Ministries</h1>}
       { !displayChildren && !displayMens && !displayMission && !displayServing && !displayStudent && !displayWomen &&   <h2 className="selectMinistry">Please select a ministry group on the left</h2>}
        {displayMission && <MissionTemplate />}
        {displayServing && <Serving />}
        {displayStudent && <StudentMinisties />}
        {displayChildren && <InfantChildren /> }
        {displayMens && <Mens />}
        {displayWomen && <Women />}
        </div>
        </div>
        <div className="homeFooter">
            <h2 style={{color: "white"}} > Our location is 1501 Whispering Pines Rd, Albany, GA</h2><a  className="directions" href="https://www.google.com/maps/place/Move+Christian+Church/@31.605381,-84.185001,15z/data=!4m6!3m5!1s0x88f27bf5efc37f83:0x8436521efbd5f2d!8m2!3d31.6054188!4d-84.1845076!16s%2Fg%2F1tp0fhnr?entry=ttu" target="_blank">Directions</a> 
            <h2 style={{color:"white"}} >Email us at staff@movechristianchurch.com with any questions you may have</h2>
        </div>
        </>
    )
}