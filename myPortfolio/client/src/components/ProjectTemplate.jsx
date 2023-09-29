import React from 'react'
import "../index.css"
import { ApiContext } from '../ApiContext'
import NewProject from './NewProject'


export default function ProjectTemplate(props){

    const{createNewProject, newProject, startNew, newProjectHandle, addProject} = React.useContext(ApiContext)

  

    console.log(props.projects)
  
console.log(props.projects.length)
        if(props.projects.length <= 0){
            return(<>
            <div className='renderedProject'>
                <h2>You have no projects to view</h2>
                <h2>Request a project below</h2>
                <button onClick={startNew}>New Project</button>
            </div>
                {createNewProject && <NewProject 
                                        newProjectHandle={newProjectHandle}
                                        addProject={addProject}
                                        newProject={newProject}
                />}
            </>)
        }


let renderedProjects
        if(props.projects.length > 0){
       renderedProjects = props.projects.map((project)=>{
        if(!project.editing){
        return(
            <div className='renderedProject'>
                <h2>Title: {project.title} </h2>
                <h3>Description: {project.description} </h3>
                <h3>Status: {project.isComplete? 'Completed' : 'Incomplete'} </h3>
                <div>
                  
                </div>
               
            </div>
        )}

        if(props.editing){
            return(
                <div className='renderedProject'>
                    <input type='text' name='title'></input>
                    <input type='text' name='description'></input>
                    <div>
                    <input type='radio' name='isComplete' value={true}></input><label>Complete</label> <input type='radio' name='isComplete' value={false}></input><label>Not Complete</label>
                    </div>
                    <div>
                    
                    </div>
                </div>
            )
        }})
   
    return(<>
    <div className='finalProjectRender'>
    {renderedProjects}
    
    {props.projects.length > 0 && <button onClick={startNew}>{createNewProject? 'Cancel' : "New Project"} </button>}
    {createNewProject && <NewProject 
                        newProjectHandle={newProjectHandle}
                        addProject={addProject}
                        newProject={newProject}
    
    
    />}
    </div>
        

    </>)
    
    }
    
   

  
}