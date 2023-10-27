import React from 'react'


export default function Admin(props){

    return (
        <>
        <div className='absolute top-1/4 text-[25px] text-white bg-black w-full flex flex-col items-center opacity-75 hover:opacity-100'>
            <div>
            <h1>Welcome {props.user.firstName} {props.user.lastName} </h1>
            </div>
        </div>
        
        </>
    )
}