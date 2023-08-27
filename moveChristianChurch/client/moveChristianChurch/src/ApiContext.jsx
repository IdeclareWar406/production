import axios from "axios"
import React from "react"


const ApiContext = React.createContext()
const userAxios = axios.create()
userAxios.interceptors.request.use(config=>{
    const token = localStorage.getItem('Token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function ApiContextProvider (props){

    const [userState, setUserState]= React.useState({
        user: JSON.parse(localStorage.getItem('User')) || "",
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
    const [prayerUpdate, setPrayerUpdate] = React.useState({
        firstName: "",
        request: ""
    })

    const [ eventsUpdate, setEventsUpdate]= React.useState({
        title: "",
        description: "",
        subject: "",
        dateRemoved: ""
    })

    const [newMission, setNewMission] = React.useState({
        title: "",
        location: "",
        description: ""
    })



console.log(logInfo)


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



    function startEditingPrayer (id){
        const unChanged = []
        const filteredPrayer = prayerRequest.filter((prayer)=>{
            if(id === prayer._id){
                prayer.editing = true
                return prayer
            }
            else unChanged.push(prayer)
        })
        
        setPrayerUpdate(prevState=>{
            return{
                firstName: filteredPrayer[0].firstName,
                request: filteredPrayer[0].request,
            }
        })
       const joined = unChanged.concat(filteredPrayer)
       
        setPrayerRequest(joined)
    }

console.log(prayerUpdate)

    function cancelPrayerEdit(id){
        console.log(id)
        const unchanged =[]
        const filteredPrayer = prayerRequest.filter((prayer)=>{
            if(prayer._id === id){
                
                prayer.editing = false
                return prayer
            }
            else unchanged.push(prayer)

        })
        console.log(filteredPrayer, 'filtered')
      const joined =  unchanged.concat(filteredPrayer)
      
      setPrayerRequest(joined)
    }
    function updatePrayerReq(event){
        const{name,value} = event.target
        setPrayerUpdate(prevState=>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    function savePrayer(id){
            
           
        userAxios.put(`/api/auth/prayer/${id}`, prayerUpdate)
            .then(res => setPrayerRequest(prevState=> prevState.map(prayer => prayer._id === id ? res.data: prayer)))
            .catch(err => console.log(err.res.data.message))
    }

    function adminEventEdit(id){
        const unchanged = []
        const filteredEvent = events.filter((event)=>{
            if(id === event._id){
                event.editing = true
                return event
            }
            else unchanged.push(event)
        })
        setEventsUpdate(prevState=>{
            return{
                title:filteredEvent[0].title,
                description: filteredEvent[0].description,
                subject: filteredEvent[0].subject
            }
        })
        const joinedEvents = unchanged.concat(filteredEvent)
        setEvents(joinedEvents)
    }

    function adminCancelEdit(id){
        const unchanged = []
        const filteredEvent = events.filter((event)=>{
            if(id === event._id){
                event.editing = false
                return event
            }
            else unchanged.push(event)
        })

        const joinedEvent = unchanged.concat(filteredEvent)
        setEvents(joinedEvent)
    }

    function adminEventEditing(event){
        const {name,value} = event.target
        setEventsUpdate(prevState=>{
            return{...prevState,
                [name]: value
            }
        })
    }
    console.log(eventsUpdate)

    function adminEventSave(id){
        userAxios.put(`/api/auth/eventUpdate/${id}`,eventsUpdate)
            .then(res=> setEvents(prevState=> prevState.map(events=> events._id === id ? res.data : events)))
            .catch(err => console.log(err.res.data.message))
            setEventsUpdate(prevState=>{
                return{
                    ...prevState,
                    title: "",
                    description: "",
                    subject: ""
                }
            })
    }
    function adminEventDelete(id){
        userAxios.delete(`/api/auth/eventUpdate/${id}`)
                .then(res=> setEvents(prevState=> prevState.filter(events=> id != events._id)))
                .catch(err => console.log(err.res.data.message))
    }

    function adminEventAdd(event){
        event.preventDefault()
        userAxios.post(`/api/auth/eventUpdate`, eventsUpdate)
                .then(res => setEvents(prevState => [...prevState, res.data]))
                .catch(err => console.log(err.res.data.message))
                setEventsUpdate(prevState => {
                    return{
                        ...prevState,
                        title: '',
                        description: '',
                        subject: ''                    
                    }
                })
    }

    function missionText(event){
            const {name,value} = event.target
            setNewMission(prevState=>{
                return{...prevState,
                    [name]: value
                }
            })
        }

     function newMissionTrip(event){
        console.log(event, 'this fired')
        event.preventDefault()
            
            userAxios.post(`/api/auth/service/mission`, newMission)
                .then(res=> setMissions(prevState=> [...prevState , res.data]))
                .catch(err => console.log(err))

               setNewMission(prevState=>{
                return{
                    title: '',
                    location: '',
                    description: ''
                }
               }) 
        }
        function beginMissionEdit(id){
            
        }

    
    function credentials(event){
        const {name, value} = event.target
        setLogInfo(prevState => {
            return{ ...prevState,
                [name]: value
            }
        })
    }

console.log(userState)

    function signOn(event){
        event.preventDefault()
        axios.post(`/api/accounts/login`, logInfo)
            .then(res => setUserState(prevState=>{
                console.log(res.data , 'userState')
                localStorage.setItem('Token', res.data.token)
                localStorage.setItem('User', JSON.stringify(res.data.user))
                return{
                    ...prevState,
                    user: res.data.user,
                    token: res.data.token
                }
            }))
            .catch(err => console.log(err.res.data.message))
    }
    function logOut(){
        localStorage.removeItem('Token')
        localStorage.removeItem('User')
        setUserState(prevState=>{
            return{
                user: "",
                token: ""
            }
        })
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
            submitPrayer,
            logOut,
            startEditingPrayer,
            updatePrayerReq,
            savePrayer,
            cancelPrayerEdit,
            adminEventEdit,
            adminCancelEdit,
            adminEventEditing,
            adminEventSave,
            adminEventDelete,
            adminEventAdd,
            missionText,
            newMissionTrip,
            newMission: newMission,
            updateEvent:eventsUpdate,
            prayerUpdate: prayerUpdate
        }}>{props.children}
        
         </ApiContext.Provider>
    )


} export {ApiContext, ApiContextProvider}