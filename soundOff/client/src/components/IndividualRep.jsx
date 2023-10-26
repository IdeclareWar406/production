import React from 'react'
import { useParams } from 'react-router-dom'
import { ApiContext } from '../ApiContext'

export default function IndividualRep(){

    const params = useParams()
    const{reps} = React.useContext(ApiContext)

    const individual = reps.map((rep)=>{
        if(rep._id === params.id){
            return(
                <div key={rep._id} className='flex flex-col text-white bg-black opacity-75 hover:opacity-100 text-[25px] justify-center items-center w-full'>
                    <h1>{rep.name} </h1>
                    <h2>{rep.state} </h2>
                    <h2>Issues</h2>
                    <h2>Summary</h2>
                    <h2>email</h2>
                    <h2>phone</h2>
                </div>
            )
        }
    })


    return(
        <>
        <div className='absolute top-1/2  w-full'>
            {individual}
        </div>
        </>
    )
}