import React from "react"

const GameContext = React.createContext()


function GameContextProvider(props){
  const  initState = {
        token: localStorage.getItem('Token') || "",
        user: JSON.parse(localStorage.getItem('User')) || "",
        serverMsg: "",
        errMsg: ''
    }
    const [userState, setUserState] = React.useState(initState)


    return(
        <GameContext.Provider value={{
         user: userState
        }}>
            {props.children}
        </GameContext.Provider>
    )
}