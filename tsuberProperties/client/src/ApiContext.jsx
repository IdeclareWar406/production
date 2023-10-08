import axios from 'axios'
import React from 'react'
// Incredibly important to bury the get token in the userAxios method. Will not work correctly otherwise.
const ApiContext = React.createContext()
const userAxios = axios.create()
        userAxios.interceptors.request.use(config=>{
            const token = localStorage.getItem('Token')
            console.log('token', token)
            config.headers.Authorization = `Bearer ${token}`
            return config
        })

function ApiContextProvider(props){


    const initUser = {
        token: localStorage.getItem('Token') || "",
        user: JSON.parse(localStorage.getItem('User')) || "",
        errMsg: "",
        serverMsg: ""
    }
    const[user,setUser] = React.useState(initUser)
    const [mlo, setMlo] = React.useState([])
    const [login, setLogin] = React.useState({
        username: "",
        password: ''
    })
    const [customers, setCustomers] = React.useState([])

    const[newUser, setNewUser] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        propertyDetail: ""
    })

function newUserHandle(event){
    const{name,value} = event.target
    setNewUser(prevState=>{
        return{
            ...prevState,
            [name]: value
        }
    })
}

function sendNewUser(event){
    event.preventDefault()
    if(newUser.firstName && newUser.lastName && newUser.email && newUser.phone != ""){
        axios.post('/api/newclient',newUser)
            .then(res=> setCustomers(prevState=> [...prevState, res.data]))
            .catch(err => console.log(err))
        setNewUser(prevState=>{
            return{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                propertyDetail: ""
            }
        })
    }
}


function adminApiCall(){
    userAxios.get('/api/auth/clients')
            .then(res=> setCustomers(res.data))
            .catch(err => console.log(err))
}

function apiCall(){
    // input mlo data and property data when I can get access
    axios.get('/api/officers')
        .then(res => setMlo(res.data))
        .catch(err => setUser(prevState =>{
            return{
                ...prevState,
                errMsg: err.response.data.message
            }
        }))
}

function signIn(event){
    event.preventDefault()
    axios.post('/api/profile/login', login)
        .then(res=> setUser(prevState =>{
            localStorage.setItem('Token', res.data.token)
            localStorage.setItem('User', JSON.stringify(res.data.user))
            return{
                ...prevState,
                token: res.data.token,
                user: res.data.user,
                errMsg: ""
            }
        }),)
        .catch(err => setUser(prevState=>{
            return{
                ...prevState,
                errMsg: err.response.data.message
            }
        }))
        setLogin(prevState=>{
            return{
                ...prevState,
                username: '',
                password: ''
            }
        })
}
// setting state back to nothing is what allows the instant swap back to showing unauthorized. If I use initUser it has this odd lag as if it thinks there is data in local storage stil
function signOut (){
    localStorage.removeItem('Token')
    localStorage.removeItem('User')
    setUser(prevState=>{
        return{
            token: "",
            user:  "",
            errMsg: "",
            serverMsg: ""
        }
    })
}
function signOnChange(event){
    const {name,value} = event.target
    setLogin(prevState =>{
        return{
            ...prevState,
            [name]: value
        }
    })
}
function adminData(){
    console.log('admin data fired')
    userAxios.get('/api/auth/clients')
            .then(res => setCustomers(res.data))
            .catch(err => console.log(err))
}
console.log(customers, 'customers')

React.useEffect(()=>{
    apiCall()
},[])



    return(
        <ApiContext.Provider value={{
            user: user,
            mlo:mlo,
            login: login,
            signOnChange,
            signIn,
            signOut,
            newUserHandle,
            sendNewUser,
            newUser: newUser,
            customers: customers,
            adminData
           
        }}>
            {props.children}
        </ApiContext.Provider>
    )


}

export {ApiContext, ApiContextProvider}