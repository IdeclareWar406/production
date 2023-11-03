import React from 'react'
import { ApiContext } from '../ApiContext'
import LoanOriginator from './LoanOriginator'

export default function Home(){
const {newUserHandle, sendNewUser, newUser} = React.useContext(ApiContext)


console.log(newUser)
    return(
        <>
        <div className='fixed w-full h-full z-[-1] flex flex-col ' >
         <img style={{width: '100%', height:'100%'}}  src='images/20230525_135529.jpg'  ></img>
            
        </div>
        <div className='w-full h-full flex flex-col'>
        <div className='absolute h-quto top-[200px]  z-1 bg-black w-full h-1/4 text-white hover:opacity-100 opacity-70 flex justify-between items-center ' >
            <div className='flex flex-col justify-center items-center'>
            
            </div>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[32px] ml-[15px]'>Welcome to Panama City Beach</h1>
            <p className='mt-[15px] text-[20px]' >Tracy Suber | Beach Haven Realty</p> 
            <p className='mt-[15px] text-[20px]'>Making your dreams come true</p>
            </div>
           <div className='flex flex-col z-1'>
            
            <form className='opacity-100 mr-[35px] flex flex-col z-1 ' onSubmit={sendNewUser} style={{opacity: 1}}>
                <h2>Contact Me:</h2>
                <p>What is your first name.</p>
                <input className='rounded text-black font-bold' type='text' name='firstName'  onChange={newUserHandle} placeholder='first name' ></input>
                <p>What is your last name.</p>
                <input className='rounded text-black font-bold' type='text' name='lastName' value={newUser.lastName} onChange={newUserHandle} placeholder='last name' ></input>
                <p>What is your email.</p>
                <input className='rounded text-black font-bold' type='email' name='email' value={newUser.email} onChange={newUserHandle} placeholder='email'></input>
                <p >What is your phone number.</p>
                <input className='rounded text-black font-bold' type='text' name='phone' value={newUser.phone} onChange={newUserHandle} placeholder='phone'></input>
                <p>Tell me about the property you are looking for.</p>
                <textarea className='text-black font-bold' name='propertyDetail' placeholder='Tell me about your dream property' onChange={newUserHandle} value={newUser.propertyDetail}></textarea>
                <button className='mt-5 bg-stone-400 rounded font-bold '><p >Send</p></button>
            </form>
           </div>
           </div>
           <div className='bg-white absolute top-2/3 mt-[90px] z-1 w-full h-auto min-h-[200px] hover:opacity-100 opacity-80 flex justify-evenly items-center text-black'>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[32px] font-bold'>Panama City Beach</h1>
            <div className='bg-black p-5'>
                <a href='https://www.pcbfl.gov/' target='_blank'>
                <img src='images/20230525_133649_01.jpg' width={"400px"} height={"400px"}></img>
                <h1 className='text-white'>If you would like to learn more about the area click here</h1>
                </a>
            </div>
            </div>
            <div className='flex flex-col justify-center items-center '>
            <h1 className='text-[32px] font-bold'>Rosemary Beach</h1>
            <div className='bg-black p-5 flex flex-col items-center cursor-pointer'>
                <a href='https://www.rosemarybeachfl.org/'>
                <img className='relative left-1/4' src='images/rosemaryBeach.jpg' width={"200px"} height={"250px"}></img>
                <h1 className='text-white'>If you would like to learn more about the area click here</h1>
                </a>
            </div>
            </div>
        </div>
        <div className='w-full h-1/4 bg-black hover:opacity-100 opacity-70 h-auto min-h-[200px] homeListing mt-[20px] text-white flex flex-col items-center '>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='mt-[30px] text-[32px]'>Need Financing?</h1>
            <div className='flex justify-evenly items-center mt-[30px]'>
                <LoanOriginator />
            </div>
        </div>
    
        </div>
        </div>
        
       
    
        
        </>
    )
}