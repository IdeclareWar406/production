import React from "react"


export default function AboutNav(props){

    return(
        <>
            <div className="aboutNav">
                <h2 className="prayer" onClick={()=> props.render('atMove')}>Here At Move</h2>
                <h2 className="prayer" onClick={()=> props.render('ourBelief')}>Our Beliefs</h2>
                <h2 className="prayer" onClick={()=> props.render('growInChrist')}>Grow In Christ</h2>
                <h2 className="prayer" onClick={()=> props.render('ourLeadership')}>Our Leadership</h2>
            </div>
        </>
    )
}