import React from "react"
import axios from 'axios'
import { Navigate } from "react-router-dom"

const GameContext = React.createContext()


function GameContextProvider(props){
  const  initState = {
        token: localStorage.getItem('Token') || "",
        user: JSON.parse(localStorage.getItem('User')) || "",
        serverMsg: "",
        errMsg: ''
    }
    const [userState, setUserState] = React.useState(initState)
    const [login, setLogin] = React.useState({
        username: "",
        password: ""
    })

    const [playerCharacter, setPlayerCharacter] = React.useState({
        name: "",
        health: "",
        mana: "",
        stamina: "",
        inventory: [],
        experience: "",
        skills: [],
        playerLevel: "",
        savedGame: "",
        attackDamage: "",
        defenseRating: ""
    })

    // constructor function for enemies

    const [playGame, setPlayGame] = React.useState(false)

    const [skipIntro, setSkipIntro] = React.useState(false)



    function handleLogin(event){
        const {name,value} = event.target
        setLogin(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    function loginRequest(event){
        event.preventDefault()
        axios.post('/api/profile/login', login)
            .then(res => setUserState(prevState => {
                return{
                    ...prevState,
                    token: res.data.token,
                    user: res.data.user
                }
            }))
            .catch(err => console.log(err.response.data.message))
    }


    function intro(){
        return <Navigate to="/intro" />
    }
    




    function gameLoop(){

        while(playerCharacter.health > 0 && playGame === true){
            if(!skipIntro){
                intro()
            }
        }

    }




    return(
        <GameContext.Provider value={{
         user: userState,
         handleLogin,
         loginRequest
        }}>
            {props.children}
        </GameContext.Provider>
    )
}