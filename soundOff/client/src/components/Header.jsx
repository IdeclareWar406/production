import React from "react"
import { Link } from "react-router-dom"
import { ApiContext } from "../ApiContext"


export default function Header (){
    const {user, signOut} = React.useContext(ApiContext)
    
    const [useMobile, setUseMobile] = React.useState(false)

    function showLinks(){
        setUseMobile(prevState => !prevState)
    }

    if(window.innerWidth >= 799){
    return(
        <>
        <img className="h-full w-full fixed" src="images/soundOffHeader.jpg"></img>
        <div className="flex justify-between ml-5px z-1 absolute w-full text-white bg-black h-[100px] items-center">
        
            <div className="text-[25px] text-white">
            <Link to='/' className="ml-5 decoration-none text-[25px] hover:text-red-700 hover:bg-white rounded  ">Sound Off</Link>
            </div>
            <div className="w-2/4 flex justify-evenly">
            <Link className="decoration-none text-[25px] hover:text-red-700 hover:bg-white rounded  " to='/'>Home</Link>
            
            <Link className="decoration-none text-[25px] hover:text-red-700 hover:bg-white rounded  "to='/reps'>Representatives</Link>
            <Link className="decoration-none text-[25px] hover:text-red-700 hover:bg-white rounded  " to='/senate'>Senators</Link>
            <Link className="decoration-none text-[25px] hover:text-red-700 hover:bg-white rounded " to="/president">Presidential</Link>
           {user.token && <Link className="decoration-none text-[25px] hover:text-red-700 hover:bg-white rounded " to='/admin'>Admin</Link>}
            <Link className="decoration-none text-[25px] hover:text-red-700 hover:bg-white rounded " to={'/login'} onClick={(user.token? signOut : "")} >{user.token ? "Logout" : "Login"} </Link>
            </div>
        </div>
        </>
    )}
    else if(window.innerWidth < 799){
        return(
        <>
        <img className="h-full w-full fixed" src="images/soundOffHeader.jpg"></img>
        <div className="absolute text-white text-[25px] ml-5 flex flex-col">
          { useMobile? <h1 onClick={showLinks}>&#10005;</h1> :<h1 onClick={showLinks}> &#9776;</h1> }
         {useMobile&& <div className="flex flex-col text-[25px]">
         <Link className="decoration-none text-[25px] hover:text-red-700 hover:bg-white rounded  " to='/'>Home</Link>
        <Link className="decoration-none text-[25px] hover:text-red-700 hover:bg-white rounded  "to='/reps'>Representatives</Link>
        <Link className="decoration-none text-[25px] hover:text-red-700 hover:bg-white rounded  " to='/senate'>Senators</Link>
        <Link className="decoration-none text-[25px] hover:text-red-700 hover:bg-white rounded " to="/president">Presidential</Link>
        {user.token && <Link className="decoration-none text-[25px] hover:text-red-700 hover:bg-white rounded " to='/admin'>Admin</Link>}
        <Link to={'/login'} className="decoration-none text-[25px] hover:text-red-700 hover:bg-white rounded " onClick={user.token? signOut : ''} >{user.token ? "Logout" : "Login"} </Link>
         </div> }
        </div>
        </>)
    }
}