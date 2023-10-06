import axios from 'axios'
import React from 'react'

const ApiContext = React.createContext()


function ApiContextProvider(props){
    const initUser = {
        token: localStorage.getItem('Token') || "",
        user: JSON.parse(localStorage.getItem('User')) || "",
        errMsg: "",
        serverMsg: ""
    }
    const[user,setUser] = React.useState(initUser)
    const [mlo, setMlo] = React.useState([])



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

React.useEffect(()=>{
    apiCall()
},[])



    return(
        <ApiContext.Provider value={{
            user: user,
            mlo:mlo
        }}>
            {props.children}
        </ApiContext.Provider>
    )


}

export {ApiContext, ApiContextProvider}