import React from "react"


export default function MinistriesNav(props){


    return(
        <div>
            <h2 className="prayer" onClick={()=>props.render('serving')}>Serving </h2>
            <h2 className="prayer" onClick={()=>props.render('mission')}>Missions</h2>
            <h2 className="prayer" onClick={()=>props.render('student')}>Student Ministry</h2>
            <h2 className="prayer" onClick={()=>props.render('children')}>Infant/Children</h2>
            <h2 className="prayer" onClick={()=>props.render('mens')}>Mens</h2>
            <h2 className="prayer" onClick={()=>props.render('women')}>Women</h2>
            <h2 className="prayer" onClick={()=>props.render('worship')}>Worship</h2>
        </div>
    )
}