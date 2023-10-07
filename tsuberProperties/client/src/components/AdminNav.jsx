import React from 'react'

export default function AdminNav(props){
    const {renderWhich} = props

    return(
        <div className='ml-5 text-[25px] font-bold flex flex-col justify-evenly h-[200px]' style={{border:'solid red 2px'}}>
            <h1 className='hover:underline' onClick={()=> renderWhich('customers')}>Customers</h1>
            <h1 className='hover:underline' onClick={()=> renderWhich('loan')}>Loan Officers</h1>
        </div>
    )
}