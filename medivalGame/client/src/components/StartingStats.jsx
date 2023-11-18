import React from "react"
import { GameContext } from "../GameContext"
import "../index.css"

export default function StartingStats(props){
const {retrieveStats} = React.useContext(GameContext)
const {myStats} = props

function updateStats(){
    retrieveStats(myStats)
}

return(
    <>
    <div className="initStats">
        <h2>{myStats.health} HP </h2>
        <h2>{myStats.stamina} stamina </h2>
        <h2>{myStats.mana} mana </h2>
        <button onClick={updateStats} className="beginButton">Begin</button>
    </div>
    </>
)


}