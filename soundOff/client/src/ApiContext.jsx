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

    function apiPull(){
        axios.get('/api/candidates')
              .then(res => setPresidents(res.data))
              .catch(err => console.log(err.response.data.message))
       
        axios.get('/api/reps')
               .then(res => setReps(res.data))
               .catch(err => console.log(err.response.data.message))
        
      
    }

    console.log(presidents, 'Presidents')
    console.log(reps, "reps")

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
            presidents: presidents
        }}>
            {props.children}

        </ApiContext.Provider>
    )
}

export {ApiContext, ApiContextProvider}