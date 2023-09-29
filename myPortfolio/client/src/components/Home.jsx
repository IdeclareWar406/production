import React from 'react'
import "../index.css"
import { ApiContext } from '../ApiContext'
import Footer from "../Footer.jsx"

export default function Home (){
document.body.style.background = 'linear-gradient(90deg, black, darkblue, darkpurple)'

const{yourName, nameHandler,user} = React.useContext(ApiContext)



   const [showInput, setShowInput] = React.useState(true)

   function inputBar(){
    if(user.user.firstName){
      setShowInput(false)
    }
   }
  


  function yourNameSubmit(event){
    event.preventDefault()
    setShowInput(prevState=> !prevState)
  }

React.useEffect(()=>{
  inputBar()
})


    return(<>
    
    <div className='homeContainer'>
    <div className='homeTitle'>
        <h2>{yourName.yourName || user.user.firstName  ? `Welcome, ${yourName.yourName || user.user.firstName}` : "Welcome, please enter your name for a personalized experience"} </h2>
        <div>
      {showInput &&  <form onSubmit={yourNameSubmit}>
       <input onChange={nameHandler} type='text' name='yourName' placeholder='your name'></input><button >Submit</button>
        </form>}
        </div>
    </div>
     <div className='homeBody'>
        <div className='homeInfo'>
            <div>
        <h2>Completed projects</h2>
        <a className='outsideLink' target='_blank' href='https://mcctest.onrender.com' >Move Christian Church</a>
            </div>
        </div>
        
        <div className='homeSubcontent'>
        <h2>Hello {yourName.yourName? yourName.yourName : "user"}, <div>
          <ul> What I know
            <li>React.js</li>
            <li>Node.js</li>
            <li>Mongoose</li>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>Vanillia JavaScript</li>
          </ul>
          </div> With these popular frameworks and databases I can develop complex applications to make your website work for you. </h2>
        
    </div>
      

      </div>
    
    </div>
    <Footer />
    </>)
}