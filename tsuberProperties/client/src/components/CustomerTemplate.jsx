import React from 'react'

import { ApiContext } from '../ApiContext'

export default function CustomerTemplate(){
    const {customers} = React.useContext(ApiContext)
    const [displayDetail, setDisplayDetail] = React.useState(false)

    function display(){
        setDisplayDetail(prevState=> !prevState)
    }


    const renderedContacts = customers.map((customer)=>{
        return(
            <div className='flex flex-col jusify-center items-center m-5 text-[20px] p-5'>
                <h3>Name: {customer.firstName} {customer.lastName} </h3>
                <h4 className=''>Email: {customer.email} </h4>
                <h4 className=''>Phone: {customer.phone} </h4>
                <h3 onClick={display} className='hover:underline'>{displayDetail? "Less Details" : "More Details"} </h3>
                {displayDetail && <div className='flex flex-col text-[20px] justify-center items-center'>
                    <h2>{customer.activity} </h2>
                    <p>{customer.propertyDetail} </p>
                    </div>}
                
                <h2></h2>
            </div>
        )
    })

    return(
        <>
        
        {renderedContacts}
        </>
    )
}