import React from "react"
import MinistriesNav from "./MinistriesNav"
import MissionTemplate from "./MissionTemplate"
import Serving from "./Serving"
import StudentMinisties from "./StudentMinistry"
import InfantChildren from "./InfantChildren"
import Mens from "./Mens"
import Women from "./Women"
export default function Ministries(){
document.body.style.backgroundColor = 'black'
const [displayMission, setDisplayMission] = React.useState(false)
const[displayServing, setDisplayServing] = React.useState(false)
const[displayStudent, setDisplayStudent] = React.useState(false)
const[displayChildren, setDisplayChildren] = React.useState(false)
const [displayMens, setDisplayMens] = React.useState(false)
const [displayWomen, setDisplayWomen] = React.useState(false)
const [displayWorship, setDisplayWorship] = React.useState(false)


    function renderWhich(value){
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
        <div>
        <div className="ministryNavigation">
        <MinistriesNav render={renderWhich} />
        </div>
        <div className="ministryRenderContainer">
        {displayMission && <MissionTemplate />}
        {displayServing && <Serving />}
        {displayStudent && <StudentMinisties />}
        {displayChildren && <InfantChildren /> }
        {displayMens && <Mens />}
        {displayWomen && <Women />}
        </div>

        </div>
    )
}