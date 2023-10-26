import React from "react"
import { ApiContext } from "../ApiContext"
import { Link } from "react-router-dom"

export default function Representatives(){
    const {reps} = React.useContext(ApiContext)
    const [filteredRep, setFilteredRep] = React.useState({
        repName: "",
       
    })
   
    const [filtered, setFiltered] = React.useState([])

   let filteredNames

    function handleFindRep(event){
        const {name, value} = event.target

        setFilteredRep(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
     filteredNames = reps.filter((rep)=>{
       return rep.name.includes(filteredRep.repName) || rep.state.includes(filteredRep.repName)
     })
     
     setFiltered(filteredNames)
    }
    

    function updateSearch(name){
        setFilteredRep(prevState =>{
            return{...prevState,
                repName: name
            }
        })
    }

    function printSearch(){
        const printedSearch = filtered.map((filter)=>{
            return(
                <Link key={filter._id} to={`/reps/${filter._id}`}>
                <div className="flex flex-col justify-center items-center" key={filter._id}>
                   
                    <h1 onClick={()=>updateSearch(filter.name) } >{filter.name} </h1>
                    <h2>{filter.state} </h2>
                  
                </div>
                 </Link>
            )
        })
        return printedSearch
    }

  

   


    
       



    const displayedReps = reps.map((rep)=>{
        return(
            <div key={rep._id} className="flex flex-col text-[20px] text-white justify-center items-center mt-10 border-solid border-white ">
              
                <h2 >{rep.name} </h2>
                <h2>{rep.state} </h2>
            </div>
        )
    })


   return(
    <>
    <div className="absolute top-1/4 flex flex-col text-[25px] text-white left-1/4 opacity-75 hover:opacity-100">

    <div className="flex flex-col items-center mt-10 bg-black ">
            <h1>Search for your representative by name or by state.</h1>
            <form className="flex flex-col w-[200px] items-center rounded">
                <input className="text-black" type="text" name="repName" placeholder="Search Representatives" onChange={handleFindRep} value={filteredRep.repName}></input>
                
            </form>
            <div>{printSearch()} </div>
           
        </div>
        <div className="flex flex-col bg-black mt-5">
            <h1>Below are your listed Representatives. Click on their names to expand their information. Alternatively, search for your reps above</h1>
            {displayedReps}
        </div>

       
       
    </div>

    </>
   )
}