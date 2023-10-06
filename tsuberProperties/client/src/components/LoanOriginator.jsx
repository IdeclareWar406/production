import React from 'react'
import { ApiContext } from '../ApiContext'

export default function LoanOriginator(){
const{mlo} = React.useContext(ApiContext)
    console.log(mlo)
            const displayedMlo = mlo.map((officer)=>{
                return(
                    <div key={officer._id} className='flex flex-col justify-center items-center rounded p-1 ' style={{border: 'solid white 5px'}}>
                        <div>
                            <img src={officer.imgUrl} style={{width: '300px', height:'300px'}}/>
                        </div>
                      <div className='flex flex-col text-[20px] justify-center items-center'>
                      <h1 className='text-[20px]'>{officer.name} </h1>
                        <h2>Email: {officer.email} </h2>
                        <h2>Phone: {officer.phone} </h2>
                      </div>
                    </div>
                )
            })

    return(
        <>
        {displayedMlo}
        </>
    )
}