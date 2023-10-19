import React from 'react'
const path = window.location
import { ApiContext } from '../ApiContext'
export default function Elder(props){
const {beginElderUpdate, handleElderUpdate, submitElderUpdate, elderRemove, cancelElderUpdate, elderUpdate} = React.useContext(ApiContext)


    console.log(props.elder)


    const ourElders = props.elder.map((elder)=>{
       
        if(!elder.editing){
        return(
            <>
            <div style={{color: 'white'}}  key={elder._id}>
                <h2>Elder - {elder.name} </h2>
               
                {path.pathname === '/admin' && <div key={elder._id}>
                    <button onClick={()=> beginElderUpdate(elder._id)}>Edit</button>  <button onClick={()=> elderRemove(elder._id)}>Delete</button>
                    </div>}
            </div>
            </>
        )}
        else if(elder.editing){
            return(
            <div className='editMission' key={elder._id}>
               
                    <input type='text' name='name' onChange={handleElderUpdate} value={elderUpdate.name}></input>
                    <input type='date' name='elderSince' onChange={handleElderUpdate} value={elderUpdate.elderSince}></input>
                   {path.pathname === '/admin' &&<div>
                    <button onClick={()=> submitElderUpdate(elder._id)}>Submit</button> <button onClick={()=> cancelElderUpdate(elder._id)}>Cancel</button>
                    </div>}
                
            </div>)
        }
    })

    return(
        <>
           {ourElders}
        </>
    )
}