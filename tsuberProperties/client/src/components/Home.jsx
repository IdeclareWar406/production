import React from 'react'
import { ApiContext } from '../ApiContext'

export default function Home(){


    return(
        <>
        <div className='fixed w-full h-full z-[-1] flex flex-col ' >
         <img style={{width: '100%', height:'100%'}}  src='images/20230525_135529.jpg'  ></img>
            
        </div>
        <div className='w-full h-full flex flex-col'>
        <div className='absolute  top-[200px]  z-1 bg-black w-full h-1/4 text-white opacity-70 flex justify-between items-center ' >
            <div className='flex flex-col justify-center items-center'>
            
            </div>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[32px] ml-[15px]'>Welcome to Panama City Beach</h1>
            <p className='mt-[15px] text-[20px]' >Tracy Suber | Beach Haven Realty</p> 
            <p className='mt-[15px] text-[20px]'>Making your dreams come true</p>
            </div>
           <div className='flex flex-col '>
            
            <form className='opacity-100 mr-[35px] flex flex-col '>
                <h2>Contact Me:</h2>
                <p>What is your name</p>
                <input type='name' name='name' placeholder='name' ></input>
                <p>What is your email</p>
                <input type='email' name='email' placeholder='email'></input>
                <p >What is your phone number</p>
                <input type='phone' name='phone' placeholder='phone'></input>
                <button className='z-[1] '><p >Send</p></button>
            </form>
           </div>
           </div>
           <div className='bg-white absolute top-2/3 mt-[90px] z-1 w-full h-1/2 opacity-80 flex justify-evenly items-center text-black'>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[32px] font-bold'>Current Listings</h1>
            </div>
            <div className='flex flex-col justify-center items-center '>
            <h1 className='text-[32px] font-bold'>Sold Listings</h1>
            </div>
        </div>
        <div className='w-full h-1/4 bg-black opacity-70 '>
        <h1>do you see me</h1>
        </div>
        </div>
        
       
    
        
        </>
    )
}