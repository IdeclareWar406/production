import React from "react"
import "../index.css"
import KnightCanvas from "./Knight"
import StartingStats from "./StartingStats"
import { GameContext } from "../GameContext"

export default function CharacterCreation(){
    const [displayedCharacter, setDisplayedCharacter] = React.useState({
        class: "",
        model: ""
    })
    const {handleNewCharacter, newCharacter, retrieveClass} = React.useContext(GameContext)

    function thisCharacter(value){

        setDisplayedCharacter(prevState => {
            if(value === "knight"){
            return{
                ...prevState,
                class: value,
                model: "assets/3dAssets/uploads_files_1950170_Solus_the_knight.gltf"
            }}
            else if(value === "wizard"){
                return{
                    ...prevState,
                    class: value,
                    model: ""
                }
            }
        })
        retrieveClass(displayedCharacter)
    }

    const knightStats = {
        health: 150,
        mana: 50,
        stamina:125,

    }

    const wizardStats = {
        health: 75,
        mana: 200,
        stamina: 50
    }

const width = window.innerWidth
const height = window.innerHeight
console.log(displayedCharacter)

    return(
        <>
        <img className="loginPhoto" src="assets/images/dungeonPhoto.jpg" width={width} height={height}/>
        <div className="charBody"style={{position: "relative", top: height / 4}}>
            
            <div className="creationBody" >
                <div className="creationClass">
                <h1>Choose your class</h1>
                <h2 onClick={()=> thisCharacter("wizard")}>Wizard</h2>
                <h2 onClick={()=> thisCharacter("knight")}>Knight</h2>
                </div>
                <div >
                    <p>What is your characters name?</p>
                    <input type="text" name="name" placeholder="Character Name" onChange={handleNewCharacter} value={newCharacter.name}/>
                </div>
                <div>
                    {displayedCharacter.class === "knight" && <StartingStats myStats={knightStats} />}
                    {displayedCharacter.class === "wizard" && <StartingStats myStats={wizardStats} />}
                </div>
              
            </div>

            <div className="charModel">
                {displayedCharacter.class === "knight" && <KnightCanvas /> }
              
            </div>

        </div>
        
        </>
    )
}