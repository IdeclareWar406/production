import axios from "axios"
import React from "react"


const ApiContext = React.createContext()

function ApiContextProvider (props){

    const [userState, setUserState]= React.useState({
        user: localStorage.getItem('User') || "",
        token: localStorage.getItem('Token') || "" 
    })
    const [prayerRequest, setPrayerRequest] = React.useState([])

    const [events, setEvents] = React.useState([])

    const [serving, setServing] = React.useState([])

    const [missions , setMissions]= React.useState([])

    const [logInfo, setLogInfo] = React.useState({
        username: "",
        password: ""
    })

    const[newPrayer, setNewPrayer]= React.useState({
        firstName: "",
        request: "",
        displayName: false,
        editing:false
    })






    function newPrayerInfo(event){
       
        const{name,value} = event.target
        console.log(name)
        
        setNewPrayer(prevState=>{
            if(name === 'displayName'){
                console.log('is true')
               const parseValue = JSON.parse(value)
                console.log(typeof(parseValue))
                return{
                    ...prevState,
                    [name]: parseValue
                }
            }
            else
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    function submitPrayer(event){
        event.preventDefault()
        axios.post(`/api/prayer`, newPrayer)
            .then(res => setPrayerRequest(prevState=> [...prevState,res.data]))
            .catch(err => console.log(err.res.data.message))
    }

    console.log(newPrayer)

    
    function credentials(event){
        const {name, value} = event.target
        setLogInfo(prevState => {
            return{ ...prevState,
                [name]: value
            }
        })
    }


    function signOn(){
        axios.get(`/api/accounts`, logInfo)
            .then(res => setUserState(prevState => {
                console.log(res.data)
                localStorage.setItem('Token', res.data.token)
                localStorage.setItem('User', res.data.user)
                return{...prevState,
                    user: res.data.user,
                    token: res.data.token
                }
            }))
    }

    function apiData(){
        axios.get(`/api/prayer`)
            .then(res => setPrayerRequest(res.data))
            .catch(err => console.log(err.res))

        axios.get('/api/events')
            .then(res=> setEvents(res.data))
            .catch(err => console.log(err.res.data.message))
        
        axios.get('/api/service/missions')
            .then(res => setMissions(res.data))
            .catch(err => console.log(err.res.data.message))

        axios.get('/api/service/volunteer')
            .then(res => setServing(res.data))
            .catch(err => console.log(err.res.data.message))
    }

    React.useEffect(()=>{
        apiData()
    },[])


    return(
        <ApiContext.Provider value={{
            user: userState,
            prayer: prayerRequest,
            events: events,
            serving: serving,
            missions: missions,
            credentials,
            signOn,
            newPrayerInfo,
            submitPrayer
        }}>{props.children}
        
         </ApiContext.Provider>
    )


} export {ApiContext, ApiContextProvider}