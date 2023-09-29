import React from 'react'
import './starParticle.css'

export default function StarParticle (){

const[followMouse, setFollowMouse] = React.useState(false)




    function spacing(){
    
    const starStyle ={
    
        position:'relative',
        top: `${Math.floor(Math.random() * 99 + 1)}px`,
        left: `${Math.floor(Math.random()*89 + 1)}%`
    }

   

    return starStyle

}





let stars 

function particleEffect(){

    let starCounter = []

    for(let i = 0; i< 600 ; i++){
        starCounter.push(i)
    }

    stars = starCounter.map((star) =>{
        return(
            <div className='particle '  style={spacing()}></div>
        )
    })
    return stars
}

let myParticle






   return(
    <div className='particle-container'   >
        {particleEffect()}


    </div>
   )
    

}