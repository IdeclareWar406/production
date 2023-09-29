import React from 'react'
import "../index.css"
import { ApiContext } from '../ApiContext'
import Footer from '../Footer.jsx'

export default function Contact(){

const{contactInfo, sendContactInfo, contactInfoHandle} = React.useContext(ApiContext)

const [verificator, setVerificator] = React.useState(false)

const [isHuman, setIsHuman] = React.useState(false)

const [checkHuman, setCheckHuman] = React.useState("")

const [answer, setAnswer] = React.useState({
    textCheck: ""
})

const [humanFail, setHumanFail] = React.useState(false)

function sendToBackEnd(event){
    event.preventDefault()

    if(contactInfo.firstName && contactInfo.lastName && contactInfo.email && contactInfo.phone !=""){
        if(answer.textCheck === checkHuman){
        setVerificator(false)
        setHumanFail(false)
        sendContactInfo(),
        captCha()
    }
    else setHumanFail(true)
       captCha()
    }

    else setVerificator(true)
    captCha()
}

function captCha(){

    const letters = "abcdefghijklmnopqrstuvwxyz"

    const capitalLetters = letters.toUpperCase()

    const capitalArr = capitalLetters.split('')
    const letterArr = letters.split('')

    const capArr = capitalArr.concat(letterArr)


    let displayedLetters = []

   

   
   for(let i = 0; i < 10; i++){
    const randomNumber = Math.floor(Math.random() *51 + 1)
        displayedLetters.push(capArr[randomNumber])
   }
setCheckHuman(displayedLetters.join(''))

}


function textCheckHandle(event){
    const{name, value} = event.target

    setAnswer(prevState=> {
        return{
            ...prevState,
            [name]: value
        }
    })
}


React.useEffect(()=>{
    captCha()
},[])





    return(
        <>
            <div className='contactBody'>
                <h2>Fill out this form or call me at 406-291-5930</h2>
                <form className='contactForm' onSubmit={  sendToBackEnd}>
                    <input type='text' name='firstName' placeholder='first name' onChange={contactInfoHandle} value={contactInfo.firstName}></input>
                    <input type='text' name='lastName' placeholder='last name '  onChange={contactInfoHandle} value={contactInfo.lastName}></input>
                    <input type='email' name='email' placeholder='email'  onChange={contactInfoHandle} value={contactInfo.email}></input>
                    <input type='phone' name='phone' placeholder='phone number'  onChange={contactInfoHandle} value={contactInfo.phone}></input>
                    <h2>CAPTCHA {checkHuman} </h2>
                   {!isHuman && <input type='text' name='textCheck' placeholder='your response' onChange={textCheckHandle}></input>}
                    <button style={{width: "100px"}} >Submit</button>
                    {verificator && <h2 style={{color: 'red'}}>Ensure all areas are filled out</h2>}
                    {humanFail && <h2 style={{color: 'red'}}>CAPTCHA check failed</h2>}
                </form>
            </div>
            <Footer />
        </>
    )
}