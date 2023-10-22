import React from 'react'
import Footer from './Footer'
import { ApiContext } from '../ApiContext'
export default function Home(props){
const {sendUpdateRequest, updateRequestHandle, updateRequest} = React.useContext(ApiContext)
const {user} = props

    return(<>
        <div className='absolute top-1/4 w-full h-auto text-white flex flex-col'>
           <div className='flex items-center bg-black flex-col opacity-75 hover:opacity-100 justify-center'>
            <h1 className='text-[30px] font-bold'>Welcome to Sound Off!</h1>
            <h2 className='w-[450px] mt-5 text-[25px]'>Our purpose is to provide you information on your elected officials to assist you in your voting decisions. Our dedication is to provide unbiased information with references to their voting records. We are also going to make it easy for you to contact your representatives and senators.</h2>
           </div>
           <div className='flex flex-col items-center relative top-50 mt-20 bg-black opacity-75 hover:opacity-100'>
            <h1 className='text-[25px] w-[600px]'>We believe it is also our duty to post the preamble of the Consitution as a reminder to each and everyone of us our duty within our country.</h1>
            <h2 className='w-[600px] mt-5 text-[25px]'>"We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America." - United States Constitution</h2>
            <a className='text-[25px] mt-5' href='https://www.uscourts.gov/about-federal-courts/educational-resources/about-educational-outreach/activity-resources/us#:~:text=%22We%20the%20People%20of%20the,for%20the%20United%20States%20of'>Quoted from US Courts, Click here for source</a>
           </div>
           <div className='relative top-70 mt-20 flex flex-col items-center justify-center bg-black hover:opacity-100 opacity-75 h-auto'>
            <h1 className='text-[25px]'>As you navigate this site please note any information you would like checked and provide links to the information provided in the form below </h1>
            <form className='flex flex-col items-center justify-center' onSubmit={sendUpdateRequest} >
                <p>What is your name?</p>
                <input className='text-black' type='text' name='name' placeholder='name' onChange={updateRequestHandle} value={updateRequest.name}></input>
                <p>What is your email?</p>
                <input className='text-black' type='email' name='email' placeholder='email' onChange={updateRequestHandle} value={updateRequest.email}></input>
                <p>Information you would like reviewed.</p>
                <textarea className='w-[200px] h-[150px] text-black' name='info' placeholder='information to be updated' onChange={updateRequestHandle} value={updateRequest.info}></textarea>
                <button className='bg-red-700 rounded-full w-[80px] mt-5'>Submit</button>
                {user.serverMsg && <h1 className='text-[25px]'>{user.serverMsg} </h1>}
            </form>
            
           </div>
           <div className='relative top-70 mt-10 bg-black opacity-75 hover:opacity-100 h-[100px] flex items-center justify-evenly'>
            <Footer />
           </div>
        </div>
    </>)
}