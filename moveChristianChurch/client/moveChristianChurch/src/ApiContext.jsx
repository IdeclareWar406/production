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
            
            console.log('save event fired')
        userAxios.put(`/api/auth/prayer/${id}`, prayerUpdate)
            .then(res => setPrayerRequest(prevState=> prevState.map(prayer => prayer._id === id ? res.data: prayer)))
            .catch(err => console.log(err.res.data.message))
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
            prayerUpdate: prayerUpdate
        }}>{props.children}
        
         </ApiContext.Provider>
    )


} export {ApiContext, ApiContextProvider}