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

    return(
        <ApiContext.Provider value={{
            user: user
        }}>
            {props.children}
        </ApiContext.Provider>
    )


}

export {ApiContext, ApiContextProvider}