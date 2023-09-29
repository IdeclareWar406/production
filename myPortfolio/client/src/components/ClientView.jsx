import React from 'react'

import { ApiContext } from '../ApiContext'

import ClientTemplate from './ClientTemplate'
import ProjectTemplate from './ProjectTemplate'
import "../index.css"
export default function ClientView(){
    const {userAxios, user, removedProfile} = React.useContext(ApiContext)
    const [userUpdate, setUserUpdate] = React.useState({
        firstName:  "",
        lastName:"",
        username: "",
       
        email: "",
        phone: ""
    })
    const [users, setUsers] = React.useState({})

    const [projects, setProjects] = React.useState([])

    
function beginUserEdit(id){
    console.log(id)
  setUsers(prevState=> {
    return{
        ...prevState,
        editing: !prevState.editing
    }
  })

  setUserUpdate(prevState=> {
    return{
        firstName: users.firstName,
        lastName: users.lastName,
        username: users.username,
       
        email: users.email,
        phone: users.phone
    }
  })
}

function userEditHandle(event){
    const{name,value} = event.target
    setUserUpdate(prevState=>{
        return{
            ...prevState,
            [name]: value,
            editing:false
        }
    })
}

function saveUserEdit(id){
       

    userAxios.put(`/api/auth/editUser/${id}`, userUpdate)
            .then(res => setUsers(prevState=> res.data))
            .catch(err => console.log(err.response.data.message))
}


function cancelUserEdit(){
   setUsers(prevState=> {
    return{
        ...prevState,
        editing: !prevState.editing
    }
   })

    setUserUpdate(prevState=>{
        return{
    firstName:  "",
    lastName:"",
    username: "",
    email: "",
    phone: ""
        }
    })

    
}

function deleteUser(id){
    userAxios.delete(`/api/auth/edituser/${id}`)
            .then(res=> setUsers(prevState=> prevState.filter(user=> user._id != id)), removedProfile())
            .catch(err => console.log(err.response.data.message))
}



function getData(){
    userAxios.get(`/api/auth/project`)
            .then(res => setProjects(res.data))
            .catch(err => console.log(err))
    
    userAxios.get(`/api/auth/users`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err.response.data.message))
}




   React.useEffect(()=>{
    getData()
   },[])

   
   console.log(projects)

    return(
        <>
        <div className='clientViewBody'>
        <div>
           <ClientTemplate 
                    user={users} 
                    beginEdit={beginUserEdit}
                    userEdit={userEditHandle}
                    userSave={saveUserEdit}
                    deleteUser={deleteUser}
                    cancelEdit={cancelUserEdit}
                    updateUser={userUpdate}
           />
        </div>

        <div className='clientTitle'>
            <h1>{user.user.firstName.charAt(0).toUpperCase() + user.user.firstName.substring(1).toLowerCase()}, here are your projects </h1>
            
            <ProjectTemplate
                      projects={projects}
            
            />
        </div>
        <div></div>
        </div>
        </>
    )
}