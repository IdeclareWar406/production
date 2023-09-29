import React from "react"
import axios from 'axios'
import { Navigate } from "react-router-dom"


const ApiContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config=>{
    const token = localStorage.getItem('Token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})


function ApiContextProvider(props){

    const[usersName, setUsersName] = React.useState({
        yourName: ""
    })
const initUserState = {
    token: localStorage.getItem('Token') || "",
    user: JSON.parse(localStorage.getItem('User')) || "",
    errMsg: "",
    serverRes: ""
}

const [userState, setUserState] = React.useState(initUserState)

const[projectIdea, setProjectIdea] = React.useState({
    title: "",
    description: ""
})

const [newUser, setNewUser] = React.useState({
    firstName: usersName.yourName || "",
    lastName:"",
    username: "",
    password:"",
    email: "",
    phone: "",
    checkPass: ""
    })

const [projects, setProjects] = React.useState([])


const [login, setLogin]= React.useState({
    username:"",
    password:""
})

const[contactInfo, setContactInfo] = React.useState({
    firstName: "",
    lastName:"", 
    email: "",
    phone: "",
})


const[newProject, setNewProject] = React.useState({
    title: "",
    description: "",

})

const [createNewProject, setCreateNewProject] = React.useState(false)


function startNew(){
    setCreateNewProject(prevState => !prevState)
}
  
function removedProfile(){
    localStorage.removeItem('Token')
    localStorage.removeItem('User')
    setUserState(initUserState)
}

    function loginChangeHandle(event){
        const {name, value} = event.target
        setLogin(prevState=>{
        
            return{
                ...prevState,
                [name]: value
            }
        })
    }

   

    function nameHandler(event){
        const {name, value} = event.target

        setUsersName(prevState=>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }
       

function setFirstName(name){
    setNewUser(prevState=>{
        return{
            ...prevState,
            firstName: name
        }
    })
}


   
    function signIn(event){
        event.preventDefault()

        if(login.username !="" && login.password !=""){
            axios.post(`/api/profiles/login`, login)
                .then(res => setUserState(prevState=>{
                    localStorage.setItem('Token', res.data.token)
                    localStorage.setItem('User', JSON.stringify(res.data.user))
                    return{
                        ...prevState,
                        token:res.data.token,
                        user: res.data.user
                    }
                }))
                .catch(err => setUserState(prevState=> {
                    return{
                        ...prevState,
                        errMsg: err.response.data.message
                    }
                }))
        }
        setLogin(prevState=>{
            return{
                username: "",
                password: ""
            }
        })
    }
    
    function signOut(){
        localStorage.removeItem('Token')
        localStorage.removeItem('User')
        setUserState(initUserState)
    }


    function landingChange(event){
        
        const {name, value} = event.target 
        console.log(name, 'name type')
        console.log(value)

        if(name === 'title' || name ===  'description'){
            console.log('this is true on api context')
            setProjectIdea(prevState=>{
                return{
                    ...prevState,
                    [name]: value
                }
            })
        }

        else setNewUser(prevState=>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }
  

    function addUser(){
        if(newUser.firstName && newUser.lastName && newUser.email && newUser.username && newUser.password && newUser.phone != ""){
        axios.post(`/api/profiles/signup`, newUser)
            .then(res => setUserState(prevState=> {
                localStorage.setItem('Token', res.data.token)
                localStorage.setItem('User', JSON.stringify(res.data.user))
                return{
                    ...prevState,
                    token: res.data.token,
                    user: res.data.user
                }
            }),addProject())
            .catch(err => setUserState(prevState=>{
                return{
                    ...prevState,
                    errMsg: err.response.data.message
                }
            }))}
    }

    function signUpUser(){
        
        if(newUser.firstName && newUser.lastName && newUser.email && newUser.username && newUser.password && newUser.phone != ""){
            axios.post('/api/profiles/signup', newUser)
                .then(res => setUserState(prevState =>{
                    localStorage.setItem('Token', res.data.token)
                    localStorage.setItem('User' , JSON.stringify(res.data.user))
                    return{
                        ...prevState,
                        token: res.data.token,
                        user: res.data.user
                    }
                }))
                .catch(err => setUserState(prevState=>{
                    return{
                        ...prevState,
                        errMsg: err.response.data.message
                    }
                }))
        }

    }

    function newProjectHandle(event) {
        const{name, value} = event.target
        setNewProject(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }


    function addProject(){
        if(projectIdea.title && projectIdea.description !="" ){
            userAxios.post(`/api/auth/project`, projectIdea)
                    .then(res => setProjects(prevState=> [...prevState, res.data]))
                    .catch(err => setUserState(prevState=> {
                        return{
                            ...prevState,
                            errMsg: err.response.data.message
                        }
                    }))
        }
        else if(newProject.title && newProject.description !=""){
            userAxios.post(`/api/auth/project`, newProject)
                    .then(res => setProjects(prevState=> [...prevState, res.data]),
                        setNewProject(prevState=>{
                            return{
                                ...prevState,
                                title: "",
                                description: ""
                            }
                        })
                    )
                    .catch(err => setUserState(prevState=> {
                        return{
                            ...prevState,
                            errMsg: err.response.data.message
                        }
                    }))
        }
    }

    function contactInfoHandle(event){
        const{name, value} = event.target
        setContactInfo(prevState=> {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    function sendContactInfo(){

        axios.post(`/api/email`, contactInfo)
            .then(res => setUserState(prevState => {
                return{
                    ...prevState,
                    serverRes: res.data
                }
            }), setContactInfo(prevState =>{
                return{
                    ...prevState,
                    firstName: "",
                    lastName:"", 
                     email: "",
                     phone: "",
                }
            }))
            .catch(err => console.log(err.respone.data.message))
    }



   





    return(
        <ApiContext.Provider value={{
            user:userState,
            landingChange,
            newUser: newUser,
            addUser,
            loginChangeHandle,
            signIn,
            signOut,
            yourName: usersName,
            nameHandler,
            userAxios: userAxios,
            setFirstName,
            signUpUser,
            contactInfo: contactInfo,
            contactInfoHandle,
            sendContactInfo,
            removedProfile,
            newProject: newProject,
            createNewProject: createNewProject,
            startNew,
            newProjectHandle,
            addProject,
        }}>
            {props.children}
        </ApiContext.Provider>
    )
}

export {ApiContext, ApiContextProvider}