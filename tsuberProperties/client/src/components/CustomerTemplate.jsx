import React from 'react'

import { ApiContext } from '../ApiContext'


export default function CustomerTemplate(){
    const {customers, checkDelete, cancelDelete, deleteCustomer, beginCustomerEdit, handleCustomerEdit, saveCustomerEdit, cancelCustomerEdit,newUser} = React.useContext(ApiContext)
    const [displayDetail, setDisplayDetail] = React.useState(false)
    const [deleteVeri, setDeleteVeri] = React.useState(false)

    function display(){
        setDisplayDetail(prevState=> !prevState)
    }
 


    const renderedContacts = customers.map((customer)=>{
        if(!customer.editing){
        return(
            <div key={customer._id} className='flex flex-col jusify-center items-center m-5 text-[20px] p-5'>
                <h3>Name: {customer.firstName} {customer.lastName} </h3>
                <h4 className=''>Email: {customer.email} </h4>
                <h4 className=''>Phone: {customer.phone} </h4>
                <h3 onClick={display} className='hover:underline'>{displayDetail? "Less Details" : "More Details"} </h3>
                {displayDetail && <div className='flex flex-col text-[20px] justify-center items-center'>
                    <h2>{customer.activity} </h2>
                    <p>{customer.propertyDetail} </p>
                    </div>}
                <div className='w-[150px] flex justify-evenly items-center'>
                    <button className='bg-cyan-500 p-2 rounded' onClick={()=> beginCustomerEdit(customer._id)}>Edit</button><button className='bg-red-700 p-2 rounded'onClick={()=> checkDelete(customer._id)} >Delete</button>
                </div>
                   {customer.deleteCheck && <div className='flex flex-col items-center justify-center'>
                    <h1>Are you sure you want to delete this customer?</h1>
                    <div>
                    <button className='bg-red-700 rounded' onClick={()=> deleteCustomer(customer._id)} ><p>Yes</p></button> <button className='bg-cyan-500 rounded' onClick={()=> cancelDelete(customer._id)}>No</button>
                    </div>
                    </div>}
                
            </div>
        )}
        else if(customer.editing){
            return(
                <div className='flex flex-col bg-black p-5 text-black' key={customer._id}>
                    <input  type='text' name='firstName' placeholder='First Name'value={newUser.firstName} onChange={handleCustomerEdit} ></input>
                    <input className='mt-2' type='text' name='lastName' placeholder='Last Name' value={newUser.lastName} onCanPlay={handleCustomerEdit}></input>
                    <input className='mt-2' type='email' name='email' placeholder='email' value={newUser.email} onChange={handleCustomerEdit} ></input>
                    <input className='mt-2' type='text' name='phone' placeholder='phone' value={newUser.phone} onChange={handleCustomerEdit}></input>
                    <textarea className='mt-2' placeholder='your dream home' name='propertyDetail' value={newUser.propertyDetail} onChange={handleCustomerEdit}></textarea>
                    <div className='text-white flex justify-evenly'>
                        <button onClick={()=> saveCustomerEdit(customer._id)}>Save</button> <button onClick={()=> cancelCustomerEdit(customer._id)}>Cancel</button>
                    </div>
                </div>
            )
        }
    })

    return(
        <>
        
        {renderedContacts}
        </>
    )
}