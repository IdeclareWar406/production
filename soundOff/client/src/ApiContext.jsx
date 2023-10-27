import React from 'react'
import axios from 'axios'


const ApiContext = React.createContext()

function ApiContextProvider(props){
const initState = {
    user: JSON.parse(localStorage.getItem('User')) || {},
    token: localStorage.getItem('Token')|| "",
    errMsg: "",
    serverMsg: ""
}

const [userState, setUserState] = React.useState(initState)

const [updateRequest, setUpdateRequest] = React.useState({
    name: '',
    email: "",
    info: ""
})
const [authorization, setAuthorization] = React.useState({
    username: "",
    password: ""
})


const [presidents, setPresidents] = React.useState([])

const [states, setStates] = React.useState([])

const [reps, setReps] = React.useState([])

    function updateRequestHandle(event){
        const{name, value} = event.target
        setUpdateRequest(prevState =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    function sendUpdateRequest(event){
        event.preventDefault()
        axios.post('/api/updateRequest', updateRequest)
            .then(res => setUserState(prevState => {
                return{
                    ...prevState,
                    serverMsg: res.data,
                    errMsg: ""
                }
            }))
            .catch(err => setUserState(prevState => {
                return{
                    ...prevState,
                    errMsg: err.response.data.message
                }
            }))

            setUpdateRequest(prevState => {
                return{
                    name: "",
                    email: "",
                    info: ""
                }
            })
    }
    
    function credentials(event){
        const {name,value} = event.target
        setAuthorization(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }


    function signOn(event){
        event.preventDefault()
        axios.post('/api/profile/login', authorization)
                .then(res => setUserState(prevState => {
                    localStorage.setItem('Token', res.data.token)
                    localStorage.setItem('User', JSON.stringify(res.data.user))
                    return{
                        ...prevState,
                        token: res.data.token,
                        user: res.data.user
                    }
                }))
                .catch(err => setUserState(prevState =>{
                    return{
                        ...prevState,
                        errMsg: err.response.data.message
                    }
                }))

            setAuthorization(prevState => {
                return{...prevState,
                    username: "",
                    password: ""
                }
            })
    }

    function signOut(){
        localStorage.removeItem('Token')
        localStorage.removeItem('User')
        setUserState(prevState => {
            return{
                ...prevState,
                token: "",
                user: {},
                errMsg: "",
                serverMsg: ""
            }
        })
    }

    function apiPull(){
        axios.get('/api/candidates')
              .then(res => setPresidents(res.data))
              .catch(err => console.log(err.response.data.message))
       
        axios.get('/api/reps')
               .then(res => setReps(res.data))
               .catch(err => console.log(err.response.data.message))
        
      
    }

    

    React.useEffect(()=>{
        apiPull()
    },[])


    return(
        <ApiContext.Provider value={{
            user:userState,
            updateRequestHandle,
            sendUpdateRequest,
            updateRequest: updateRequest,
            reps:reps,
            presidents: presidents,
            signOn,
            credentials,
            signOut
        }}>
            {props.children}

        </ApiContext.Provider>
    )
}

export {ApiContext, ApiContextProvider}