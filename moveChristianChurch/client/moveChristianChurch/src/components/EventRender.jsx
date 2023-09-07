import React from "react"


export default function EventRender(props){

   


    return(<div className="eventNav">
        <h2 className="student" onClick={()=> props.render('student')} >Students</h2>
        <h2 className="adult" onClick={()=> props.render('adult')}>Adults</h2>
        <h2 className="holiday" onClick={()=> props.render('holiday')}>Holiday</h2>
    </div>)
}