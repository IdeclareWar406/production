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
        token: localStorage.getItem('Token') || "" ,
        errMsg: ""
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

    const [newService, setNewService] = React.useState({
        title: "",
        description: "",
        imgUrl: ""

    })

    const [updateUser, setUpdateUser] = React.useState({
        username:"",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        isAdmin: "",

    })
    const [displayForm, setDisplayForm]= React.useState(false)

    const [volunteers, setVolunteers] = React.useState([])

    const [userData, setUserData] = React.useState([])

    const [newUser, setNewUser] = React.useState({
        username:"",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
       password:"",
       verificator: ""
    })

    const [newVolunteer, setNewVolunteer] = React.useState({
        firstName:"",
        lastName: "",
        email: "",
        phone: ""
    })
    const [volunteerPosId, setVolunteerPosId] = React.useState("")

const [failedVerification, setFailedVerification] = React.useState(false)


    function resetVerification(){
        setFailedVerification(false)
    }

    function newUserHandleChange(event){
        const {name, value} = event.target

        setNewUser(prevState=>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    function addNewUser(event){
        event.preventDefault()
        if(newUser.password === newUser.verificator){
            if(newUser.password && newUser.firstName && newUser.lastName && newUser.email && newUser.phone&& newUser.username){
            userAxios.post(`/api/accounts/signUp`, newUser)
                    .then(res => setUserData(prevState=> [...prevState, res.data]), setUserState(prevState =>{
                        return{
                            ...prevState,
                            errMsg: ""
                        }
                    }))
                    .catch(err => setUserState(prevState=>{
                        return{
                            ...prevState,
                            errMsg: err.response.data.message
                        }
                    }))

                    setNewUser(prevState=>{
                        return{
                            username:"",
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                           password:"",
                           verificator: ""  
                        }
                    })
            if(failedVerification === true){
                setFailedVerification(false)
            }}
            else setFailedVerification(true)
        }
        else setFailedVerification(true)
    }




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
        
        axios.post(`/api/prayer`, newPrayer)
            .then(res => setPrayerRequest(prevState=> [...prevState,res.data]))
            .catch(err => console.log(err.res.data.message))
    }

    function deletePrayer(id){
        
        userAxios.delete(`/api/auth/prayer/${id}`)
                .then(res=> setPrayerRequest(prevState=> prevState.filter(prayer=> prayer._id !=id)))
                .catch(err => console.log(err.response.data.message))
    }



    function startEditingPrayer (id){
        
        const filteredPrayer = prayerRequest.filter((prayer)=>{
            if(id === prayer._id){
                prayer.editing = true
                return prayer
            }
            
        })
        
        setPrayerUpdate(prevState=>{
            return{
                firstName: filteredPrayer[0].firstName,
                request: filteredPrayer[0].request,
            }
        })
       
       
        setPrayerRequest(prevState=> prevState.map(prayer=> id === prayer._id ? filteredPrayer[0]: prayer))
    }



    function cancelPrayerEdit(id){
        
        const filteredPrayer = prayerRequest.filter((prayer)=>{
            if(prayer._id === id){
                
                prayer.editing = false
                return prayer
            }
            

        })
       
      
      setPrayerRequest(prevState=> prevState.map(prayer=> id === prayer._id ? filteredPrayer[0]: prayer))
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
        
        const filteredEvent = events.filter((event)=>{
            if(id === event._id){
                event.editing = true
                return event
            }
            
        })
        setEventsUpdate(prevState=>{
            return{
                title:filteredEvent[0].title,
                description: filteredEvent[0].description,
                subject: filteredEvent[0].subject
            }
        })
        setEvents(prevState=> prevState.map(events=> events._id === id ? filteredEvent[0]: events))
    }

    function adminCancelEdit(id){
       
        const filteredEvent = events.filter((event)=>{
            if(id === event._id){
                event.editing = false
                return event
            }
            
        })
        setEvents(prevState=> prevState.map(events => id === events._id ? filteredEvent[0]: events))
        
    }

    function adminEventEditing(event){
        const {name,value} = event.target
        setEventsUpdate(prevState=>{
            return{...prevState,
                [name]: value
            }
        })
    }
    

    function adminEventSave(id){
        userAxios.put(`/api/auth/eventUpdate/${id}`,eventsUpdate)
            .then(res=> setEvents(prevState=> prevState.map(events=> events._id === id ? res.data : events)))
            .catch(err => console.log(err.response.data.message))
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
                .catch(err => console.log(err.response.data.message))
    }

    function adminEventAdd(event){
        event.preventDefault()
        if(eventsUpdate.title && eventsUpdate.description && eventsUpdate.subject && eventsUpdate.dateRemoved !="" ){
        userAxios.post(`/api/auth/eventUpdate`, eventsUpdate)
                .then(res => setEvents(prevState => [...prevState, res.data]))
                .catch(err => console.log(err.response.data.message))
                setEventsUpdate(prevState => {
                    return{
                        ...prevState,
                        title: '',
                        description: '',
                        subject: '',
                        dateRemoved: ""                   
                    }
                })}
            else setFailedVerification(true)
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
            if(newMission.title && newMission.location && newMission.description !=""){
            userAxios.post(`/api/auth/service/mission`, newMission)
                .then(res=> setMissions(prevState=> [...prevState , res.data]))
                .catch(err => console.log(err))

               setNewMission(prevState=>{
                return{
                    title: '',
                    location: '',
                    description: ''
                }
               }) }
            else setFailedVerification(true)
        }
        function beginMissionEdit(id){
            const unchanged = []
            const filteredMission = missions.filter((mission)=>{
                if(id === mission._id){
                    mission.editing = true
                    return mission
                }else unchanged.push(mission)
            })
            setNewMission(prevState => {
                return{...prevState,
                    title:filteredMission[0].title,
                    location: filteredMission[0].location,
                    description: filteredMission[0].description
                }
            })
            //proper way to do things, fix the other functions
            setMissions(prevState => prevState.map(mission=> id === mission._id ? filteredMission[0] : mission))
        }

        function cancelMissionEdit(id){
            
            const filteredMission = missions.filter((mission)=>{
                if(id === mission._id){
                    mission.editing = false
                    return mission
                }
            })
           
           setMissions(prevState => prevState.map(mission=> id === mission._id? filteredMission[0]: mission))
        }

        function saveMissionEdit(id){
            userAxios.put(`api/auth/service/mission/${id}`, newMission)
                    .then(res => setMissions(prevState=> prevState.map(mission=> id === mission._id? res.data: mission)))
                    .catch(err => console.log(err))
                    setNewMission(prevState=>{
                        return{
                            title: '',
                            location: '',
                            description: ''
                        }
                    })
        }
        function deleteMission(id){
            userAxios.delete(`/api/auth/service/mission/${id}`)
                .then(res => setMissions(prevState => prevState.filter(mission=> id != mission._id)))
                .catch(err => console.log(err))
        }

        function serviceChangeHandler(event){
            const {name,value} = event.target
            setNewService(prevState => {
                return{
                    ...prevState,
                    [name]: value
                }
            })
        }
        
        function newServing (event){
            event.preventDefault()
            if(newService.title != "" && newService.description != ""){
            userAxios.post(`/api/auth/service/serving`, newService)
                .then(res=> setServing(prevState=> [...prevState, res.data]))
                .catch(err => console.log(err.response.data.message))
                setNewService(prevState=>{
                    return{
                        title: "",
                     description: "",
                     imgUrl: ""
                    }
                })}
                else setFailedVerification(true)
            
        }
        function beginServingEdit(id){
            const filteredService = serving.filter((serve)=>{
                if(id === serve._id){
                    serve.editing = true
                    return serve
                }
                setNewService(prevState=>{
                    return{...prevState,
                        title: filteredService[0].title,
                        description:filteredService[0].description,
                        imgUrl: filteredService[0].imgUrl
                    }
                })
            })
            setServing(prevState => prevState.map(serve=> id === serve._id? filteredService[0] : serve))
        }

        function cancelServeEdit(id){
            const filteredService = serving.filter((serve)=>{
                if(id === serve._id){
                    serve.editing = false
                    return serve
                }
                setNewService(prevState=>{
                    return{
                     title: "",
                     description: "",
                     imgUrl: ""


                    }
                })
            })
            setServing(prevState=> prevState.map(serve=> id === serve._id ? filteredService[0]: serve))
        }

        function saveServeEdit(id){
            userAxios.put(`/api/auth/service/serving/${id}`, newService)
                .then(res => setServing(prevState=> prevState.map(serve=> id === serve._id ? res.data : serve)))
                .catch(err => console.log(err.response.data.message))
                setNewService(prevState=>{
                    return{
                     title: "",
                     description: "",
                     imgUrl: ""
                    }
                })
        }

        function deleteService(id){
            userAxios.delete(`/api/auth/service/serving/${id}`)
                .then(res=> setServing(prevState=> prevState.filter(serve=> id != serve._id)))
                .catch(err => console.log(err.response.data.message))
        }
        
        function adminUserUpdate(id){
            const filteredUser = userData.filter((user)=>{
                if(id === user._id){
                    user.editing = true
                    return user
                }
            })

         setUpdateUser(prevState => {
            return{
                username: filteredUser[0].username,
                firstName: filteredUser[0].firstName,
                lastName: filteredUser[0].lastName,
                email: filteredUser[0].email,
                isAdmin: filteredUser[0].isAdmin,
            }
         })
        setUserData(prevState=> prevState.map(user => user._id === id? filteredUser[0]: user ))
        }

        function adminUserHandleChange(event){
            const{ name, value} = event.target
                if(value === "true" || value === "false"){
                    const toBoolean = JSON.parse(value)
                    setUpdateUser(prevState=> {
                        return{
                            ...prevState,
                            [name]: toBoolean
                        }
                    })
                }
        else
            setUpdateUser(prevState=>{
                return{
                    ...prevState,
                    [name]: value
                }
            })
        }
console.log(updateUser)

function adminUserCancel(id){
    const filteredUser = userData.filter((user)=>{
        if(user._id === id){
            user.editing = false
            return user
        }
    })

    setUpdateUser(prevState =>{
        return{
            username:"",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        isAdmin: "",
        }
    })
    setUserData(prevState=> prevState.map(user => user._id === id ? filteredUser[0]: user))
}

    function adminUserSave(id){
        

        userAxios.put(`/api/auth/useredit/${id}`,updateUser)
                .then(res=> setUserData(prevState=> prevState.map(user=> user._id === id? res.data: user)))
                .catch(err => console.log(err.response.data.message))
                setUpdateUser(prevState=> {
                    return{
                        username:"",
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        isAdmin: "",  
                    }
                })
    }

    function adminUserDelete(id){
        userAxios.delete(`/api/auth/useredit/${id}`)
                .then(res => setUserData(prevState=> prevState.filter(user=> user._id != id)))
                .catch(err => console.log(err.response.data.message))
    }

    function volunteerHandleChange(event){
        const{name,value} = event.target

        setNewVolunteer(prevState=>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }
    console.log(newVolunteer)
console.log(volunteerPosId)
    function addVolunteer(event){
        event.preventDefault()
        if(newVolunteer.firstName && newVolunteer.lastName && newVolunteer.email && newVolunteer.phone && volunteerPosId !=""){
            console.log('sending')
            axios.post(`api/newVol/${volunteerPosId}`, newVolunteer)
                .then(res=> console.log(res.data))
                .catch(err=> console.log(err.response.data.message))


                setNewVolunteer(prevState=>{
                    return{
                        firstName:"",
                        lastName: "",
                        email: "",
                        phone: ""
                    }
                })
        }
        else setFailedVerification(true)
    }

    function beginVolunteerEdit(id){
        const foundVol = volunteers.filter((vol)=>{
            if(id === vol._id){
                vol.editing = true
                return vol
            }
        })
        
        
        setNewVolunteer(prevState=>{
            return{
                     firstName:foundVol[0].firstName,
                        lastName:foundVol[0].lastName,
                        email: foundVol[0].email,
                        phone: foundVol[0].phone
            }
        })

        setVolunteers(prevState => prevState.map(vol => vol._id === id ? foundVol[0] : vol))
    }

    function cancelVolunteerEdit(id){
        const foundVol = volunteers.filter((vol)=>{
            if(id === vol._id){
                vol.editing = false
                return vol
            }
        })
        setNewVolunteer(prevState => {
            return{
                firstName:"",
                lastName: "",
                email: "",
                phone: ""
            }
        })
        setVolunteers(prevState => prevState.map(vol => vol._id === id ? foundVol[0]: vol))
    }

    function saveVolunteer(id){
        if(newVolunteer.firstName && newVolunteer.lastName && newVolunteer.email && newVolunteer.phone !=""){
            userAxios.put(`api/auth/volunteers/${id}`, newVolunteer)
                    .then(res => setVolunteers(prevState=> prevState.map(vol => id === vol._id ? res.data: vol)), setUserState(prevState=>{
                        return{
                            ...prevState,
                            errMsg:""
                        }
                    }))
                    .catch(err => setUserState(prevState => {
                        return{
                            ...prevState,
                            errMsg: err.response.data.message
                        }
                    }))
        }
        setNewVolunteer(prevState=>{
            return{
                firstName:"",
                lastName: "",
                email: "",
                phone: ""
            }
        })
    }

    function deleteVolunteer(id){
        userAxios.delete(`/api/auth/volunteers/${id}`)
                .then(res=> setVolunteers(prevState=> prevState.filter(vol=> vol._id != id), setUserState(prevState => {
                    return{
                        ...prevState,
                        errMsg: ""
                    }
                })))
                .catch(err => setUserState(prevState=> {
                    return{
                        ...prevState,
                        errMsg:err.response.data.message
                    }
                }))
    }

    function volPosId(id){
        setVolunteerPosId(id)
    }
  
    
    function credentials(event){
        const {name, value} = event.target
        setLogInfo(prevState => {
            return{ ...prevState,
                [name]: value
            }
        })
    }

function getVolunteers(){
    userAxios.get('/api/auth/volunteers')
            .then(res => setVolunteers(res.data))
            .catch(err => console.log(err.response.data.message))
}

    function signOn(event){
        event.preventDefault()
        axios.post(`/api/accounts/login`, logInfo)
            .then(res => setUserState(prevState=>{
                getVolunteers()
                localStorage.setItem('Token', res.data.token)
                localStorage.setItem('User', JSON.stringify(res.data.user))
                return{
                    ...prevState,
                    user: res.data.user,
                    token: res.data.token,
                    errMsg: ""
                }
            }))
            .catch(err => setUserState(prevState=> {
                return{
                    ...prevState,
                    errMsg: err.response.data.message
                }
            }))
    }
   function assignVolunteers(data){
       setVolunteers(data)
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
    function showForm(){
        console.log('fired')
        setDisplayForm(prevState=> !prevState)
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
        axios.get(`/api/users`)
                .then(res => setUserData(res.data))
                .catch(err => console.log(err.response.data.message))
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
            deletePrayer,
            cancelPrayerEdit,
            adminEventEdit,
            adminCancelEdit,
            adminEventEditing,
            adminEventSave,
            adminEventDelete,
            adminEventAdd,
            missionText,
            newMissionTrip,
            beginMissionEdit,
            cancelMissionEdit,
            saveMissionEdit,
            deleteMission,
            serviceChangeHandler,
            newServing,
            beginServingEdit,
            saveServeEdit,
            cancelServeEdit,
            deleteService,
            showForm,
            displayForm: displayForm,
            newService:newService,
            newMission: newMission,
            updateEvent:eventsUpdate,
            prayerUpdate: prayerUpdate,
            allUsers: userData,
            adminUserUpdate,
            adminUserDelete,
            adminUserSave,
            adminUserHandleChange,
            adminUserCancel,
            updateUser: updateUser,
            newUserHandleChange,
            addNewUser ,
            newUser: newUser,
            passCheck: failedVerification,
            newPrayer:newPrayer,
            resetVerification,
            volunteerHandleChange,
            addVolunteer,
            volPosId,
            volunteerPosition:volunteerPosId,
            volunteers: volunteers,
            userAxios: userAxios,
            assignVolunteers,
            beginVolunteerEdit,
            saveVolunteer,
            cancelVolunteerEdit,
            deleteVolunteer,
            newVolunteer: newVolunteer
        }}>{props.children}
        
         </ApiContext.Provider>
    )


} export {ApiContext, ApiContextProvider}