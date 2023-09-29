import React from 'react'
import "./index.css"
import { ApiContext } from './ApiContext'
import { Link } from 'react-router-dom'
export default function LandingPage(){
    const{newUser, landingChange, addUser,yourName, setFirstName} = React.useContext(ApiContext)


    const [renderedName, setRenderedName] = React.useState("")
    const title = 'Welcome to Suber Cyber Development'
    const titleArr = title.split(" ")
    console.log(newUser, 'newUser')
    let name = newUser.firstName || " did not type name"
    const [webTitle, setWebTitle] = React.useState(titleArr)
    const [indexCounter, setIndexCounter] = React.useState(0)
    const [renderedTitle, setRenderedTitle] = React.useState("")
    const [question, setQuestion] = React.useState(['Welcome, may I please have your first name?', `${yourName.yourName ? yourName.yourName + "," :" Thank you!"} ${yourName.yourName ? "if" : "If"} you would like to go to the home page click on home at the top.`,'Please type in a title for the project.','Please type in a description of the project',
    'Please type in your last name.', 'please type in your email', 'please type in your phone number','Please make a username to login to this site and see your project progress', 'Please make a password', 'By pressing send one last time you agree to have your project data and your data stored. Upon pressing send you will be automatically redirected to the home page'
])
    const [questionCounter, setQuestionCounter] = React.useState(0)
    const [questionIndexCount, setQuestionIndexCount] = React.useState(0)
    const [renderedQuestion, setRenderedQuestion] = React.useState("")
    function increaseCount(){
        clearInterval(counterInt)
        if(indexCounter < titleArr.length +1){
        setIndexCounter(prevState=>{
            if(indexCounter < titleArr.length){
                
                
                return (prevState + 1 )
            }
           else return prevState 
            
        })
        myTitle()
    }
        
      
    }

        function myTitle(){
          const pageTitle =  webTitle.map((word, index)=>{
            console.log(indexCounter)
                if(index < indexCounter ){
                    return word
                }
            
            })
            
           
           const thisTitle = pageTitle.join(" ")
           
            setRenderedTitle(thisTitle)
        }
        
       if(yourName.yourName){
            if(questionCounter === 0){
            setQuestionCounter(prevState => prevState +1)}
            
       }

        const counterInt = setInterval(increaseCount, 200)
       
        function questionWord(){
            clearInterval(questionInt)
            
            const myQuestion = question[questionCounter]
            const splitQuestion = myQuestion.split(" ")
            if(questionIndexCount < splitQuestion.length +1){
                setQuestionIndexCount(prevState=> {
                  return  prevState + 1
                })
                areTheyEqual()
            }
        }

        function areTheyEqual(){
            if(title === renderedTitle){
               const questionArr = question[questionCounter]
               
               const splitQuestion = questionArr.split(" ")
              
               const displayedQuestion = splitQuestion.map((ask, index)=>{
                    if(index < questionIndexCount){
                        return ask
                    }
               })
                const thisQuestion = displayedQuestion.join(" ")
                
                setRenderedQuestion(thisQuestion)
            }
            
        }

        const questionInt = setInterval(questionWord, 500)

        function nameChange(event){
            const {name,value} = event.target
            landingChange(event)
            setRenderedName(prevState=> value)
        }

        console.log(renderedName, 'rendered name')
        function nextQuestion(){
            setQuestionCounter(prevState=>{
                return prevState + 1
            })
            setQuestionIndexCount(prevState=>{
                return 0
            })
            setQuestion(prevState=> prevState)

            if(questionCounter === 9){
                console.log('this is true')
                setQuestionCounter(prevState=>{
                    return 0
                })
                addUser()
                
            }
        }
        
           let typeName
            if(questionCounter === 0){
               typeName = "firstName"
            }
            else if(questionCounter === 2){
                typeName= "title"
            }
            else if(questionCounter === 3){
                typeName= "description"
            }
            else if(questionCounter === 4){
                typeName= "lastName"
            }
            else if(questionCounter === 5){
                typeName= "email"
            }
            else if(questionCounter === 6){
                typeName= "phone"
            }
            else if(questionCounter === 7){
                typeName = 'username'
            }
            else if(questionCounter === 8){
                typeName = 'password'
            }
            
      
        React.useEffect(()=>{
            if(yourName.yourName){
                setFirstName(yourName.yourName)
            }
        },[])
     

    return(
        <>
      <div className='landingContainer'>
        <div className='homeTitle'>
        <h2>{renderedTitle|| ""} </h2>
        <h2>Please follow the directions below and we will contact you as soon as possible about your project. Thank you for your time!</h2>
        </div>

        <div className='landingBody'>
        
        <h2 className='questionBody'> {renderedQuestion || "loading..." } </h2>
        </div>
             <div className='landingTextContainer'>
        <textarea className='landingTextArea' name= {typeName} placeholder='input response' onChange={nameChange}></textarea> <button onClick={nextQuestion} >Send</button>
             </div>
        </div>
        </>
    )
}