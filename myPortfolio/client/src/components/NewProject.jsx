import React from 'react'
import '../index.css'

export default function NewProject(props){

    function sendToApi(event){
        event.preventDefault()
        props.addProject()
    }


    return(
        <div>
            <form className='newProjectForm' onSubmit={sendToApi}>
                <input type='text' name='title' placeholder='title' onChange={props.newProjectHandle} value={props.newProject.title}></input>
                <textarea style={{width: '200px', height:'150px'}} type='text' name='description' placeholder='description' onChange={props.newProjectHandle} value={props.newProject.description}></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}