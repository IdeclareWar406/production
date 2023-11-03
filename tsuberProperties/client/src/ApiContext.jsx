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
function checkDelete(id){
    console.log(id, "check delete")
    const filtered = customers.filter((customer)=>{
        if(id === customer._id){
            return customer.deleteCheck = true
        }
    })

    setCustomers(prevState => prevState.map(customer => customer._id === id? filtered[0]: customer))
}

function cancelDelete(id){

    const filteredCancel = customers.filter((customer)=>{
        if(customer._id === id){
         customer.deleteCheck = false
         return customer
        }
    })
    console.log(filteredCancel[0], "filtered")
    setCustomers(prevState => prevState.map(customer => customer._id === id? filteredCancel[0] : customer))
}

function deleteCustomer(id){
    userAxios.delete(`/api/auth/clients/${id}`)
            .then(res => setCustomers(prevState => prevState.filter(customer => customer._id != id)))
            .catch(err => console.log(err.response.data.message))
}

function beginCustomerEdit(id){
    const filteredEdit = customers.filter((customer)=>{
        if(id === customer._id){
            customer.editing = true
            return customer
        }
    })
    setNewUser(prevState => {
        return{
            ...prevState,
            firstName: filteredEdit[0].firstName,
            lastName: filteredEdit[0].lastName,
            email: filteredEdit[0].email,
            phone: filteredEdit[0].phone,
            propertyDetail: filteredEdit[0].propertyDetail
        }
    })

    setCustomers(prevState => prevState.map(customer => customer._id === id? filteredEdit[0] : customer))
}

function handleCustomerEdit(event){
    const {name, value} = event.target 
    setNewUser(prevState => {
        return{
            ...prevState,
            [name]:value
        }
    })
}

function saveCustomerEdit(id){
    userAxios.put(`/api/auth/clients/${id}`)
            .then(res => setCustomers(prevState => prevState.map(customer => customer._id === id? res.data : customer)))
            .catch(err => console.log(err.response.data.message))
}

function cancelCustomerEdit(id){
    const filteredCancel = customers.filter((customer)=>{
        if(customer._id === id){
            customer.editing = false
            return customer
        }
    })

    setNewUser(prevState => {
        return{
            firstName: "",
                lastName: "",
                email: "",
                phone: "",
                propertyDetail: ""
        }
    })

    setCustomers(prevState => prevState.map(customer => customer._id === id ? filteredCancel[0]: customer))
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
            adminData,
            checkDelete,
            cancelDelete,
            deleteCustomer,
            beginCustomerEdit,
            handleCustomerEdit,
            saveCustomerEdit,
            cancelCustomerEdit
           
        }}>
            {props.children}
        </ApiContext.Provider>
    )


}

export {ApiContext, ApiContextProvider}