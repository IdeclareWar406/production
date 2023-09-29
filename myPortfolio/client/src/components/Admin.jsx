import React from "react"
import AdminNav from "./AdminNav"
import { ApiContext } from "../ApiContext"

import UserTemplate from "./UserTemplate"
import Footer from '../Footer.jsx'
import ProjectTemplate from "./ProjectTemplate"
import "../index.css"



export default function Admin(){

const{userAxios, user} = React.useContext(ApiContext)
const[users, setUsers] = React.useState([])
const[projects, setProjects] = React.useState([])
const [render, setRender] = React.useState({
    users: false,
    projects: false,
    clients: false
})

const [userUpdate, setUserUpdate] = React.useState({
    firstName:  "",
    lastName:"",
    username: "",
   currentPassword:"",
   password: "",
    email: "",
    phone: ""
})

console.log(userUpdate, 'userUpdate')
function renderWhich(value){
    setRender(prevState=>{
        if(value === 'users'){
            return{
                ...prevState,
                users: !prevState.users,
                projects: false,
                clients: false
            }
        }
        else if(value === 'projects'){
            return{
                ...prevState,
                projects: !prevState.projects,
                users:false,
                clients:false
            }
        }
        else if(value === 'clients'){
            return{
                users:false,
                projects:false,
                clients: !prevState.clients
            }
        }
    })
}

function apiCall(){
    
    userAxios.get('/api/auth/users')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))

    userAxios.get('/api/auth/project')
        .then(res => setProjects(res.data))
        .catch(err => console.log(err, ))
}


// fix bug with cancel. Maybe just do a re-write or look with fresh eyes
function beginUserEdit(id){
    const userUpdate = users.filter((user)=>{
        if(user._id === id){
           return user.editing = true
           
        }
       
    })
    console.log(userUpdate)
    setUserUpdate(prevState=>{
        return{
            ...prevState,
    firstName: userUpdate[0].firstName ,
    lastName: userUpdate[0].lastName,
    username: userUpdate[0].username,
    
    email: userUpdate[0].email,
    phone: userUpdate[0].phone
        }
    })
    setUsers(prevState=> prevState.map(user=> user._id === id? userUpdate[0] : user))
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
            .then(res => setUsers(prevState=> prevState.map(user=> user._id === id ? res.data : user)))
            .catch(err => console.log(err.response.data.message))
}


function cancelUserEdit(id){

   const filteredUser = users.filter((user)=>{
            if(user._id === id){
                user.editing = false
                return user
            }
   })
   console.log(filteredUser, 'canceled')
    setUserUpdate(prevState=>{
        return{
            ...prevState,
    firstName:  "",
    lastName:"",
    username: "",
    email: "",
    phone: ""
        }
    })

   setUsers(prevState => prevState.map(user => user._id === id? filteredUser[0]: user ))
}

function deleteUser(id){
    userAxios.delete(`/api/auth/edituser/${id}`)
            .then(res=> setUsers(prevState=> prevState.filter(user=> user._id != id)))
            .catch(err => console.log(err.response.data.message))
}

console.log(users)
const renderedUser = users.map((user)=>{
    return(
       <UserTemplate key={user._id}
       email={user.email}
       phone={user.phone}
       username={user.username}
       editing={user.editing}
       beginEdit={beginUserEdit}
       userHandle={userEditHandle}
       cancelEdit={cancelUserEdit}
       saveEdit ={saveUserEdit}
       deleteUser={deleteUser}
       id={user._id}
       update={userUpdate}
       />
       
        )
})



const renderedProjects = projects.map((project)=>{
   
    return(
        <ProjectTemplate 
                    key={project._id}
                    title={project.title}  
                     description={project.description}
                     client={users}
                     id={project.clientId}
                     isComplete={project.isComplete}
                     editing={project.editing}
                    
                     />
                     
    )
})


const renderedClients = users.map((client)=>{
    if(client.isClient){
        
    return(
    <UserTemplate key={client._id}
                email={client.email}
                phone={client.phone}
                username={client.username}
                editing={user.editing}
                beginEdit={beginUserEdit}
                userHandle={userEditHandle}
                cancelEdit={cancelUserEdit}
                saveEdit ={saveUserEdit}
                deleteUser={deleteUser}
    
    />
)}})



React.useEffect(()=>{
 apiCall()
},[])

    return(
        <>
            <div className="adminBody">
                <AdminNav render={renderWhich} />
                <div className="adminRender">
                {!render.users && !render.projects && !render.clients && <h1>Welcome {user.user.username} </h1>}
                {render.users && <h1>Users</h1>}
                {render.users && renderedUser
                }
                {render.projects && <h1>Projects:</h1>}
                {render.projects && renderedProjects}
                {render.clients && <h1>Clients:</h1>}
                {render.clients && renderedClients}
                </div>
                <div></div>
            </div>
            <Footer />
        </>
    )
}