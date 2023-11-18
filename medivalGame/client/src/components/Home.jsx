import React from "react"
// design the home screen showing either the same image or a different image, like inside a castle and a character selection button/screen and a logout function.
import { GameContext } from "../GameContext"
import { Link } from "react-router-dom"
import "../index.css"

export default function Home(){

    const{logout, user} = React.useContext(GameContext)
    const [selectedCharacter, setSelectedCharacter] = React.useState([])

    const myUser = user.user
    const width = window.innerWidth
    const height = window.innerHeight

    function charSelect(id){
        const filtered = myUser.characters.filter((character)=>{
            if(character._id === id){
                return character
            }
        })
        setSelectedCharacter(prevState =>[filtered[0]])
    }
    console.log(selectedCharacter, "selected Character")
    
    const myCharacters = myUser.characters.map((character) =>{
        return(
            <div className="displayedCharacters" onClick={()=> charSelect(character._id)}>
                <h2>Name:</h2>
                <h2>Level</h2>
                <h2>Location</h2>
            </div>
        )
    })
    if(myCharacters){
        console.log(myCharacters.length)
    }

    return(<>
    <img className="homeImg" src="assets/images/castleCourtyard.jpg" width={width} height={height} style={{position: "fixed"}}/>
    <div className="display">
    <div>
    { <h2 className="link">Please select a character</h2>}
    </div>
   <div>
    {myCharacters}
    <Link className="link" to="/characterCreation" > New Character</Link>
   </div>
   <div>
    <h2 className="link">Log Out</h2>
   </div>
    </div>
   
    </>)
}