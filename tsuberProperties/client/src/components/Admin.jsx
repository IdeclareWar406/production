import React from 'react'
import AdminNav from './AdminNav'
import LoanOriginator from './LoanOriginator'

export default function Admin(){

    const [render, setRender] = React.useState({
        customers:true,
        loan: false
    })
  function renderWhich(value){
        if(value === 'customers'){
            setRender(prevState=>{
                return{
                    ...prevState,
                    customers: !prevState.customers,
                    loan: false
                }
            })
        }
        else if(value === 'loan'){
            setRender(prevState=>{
                return{
                    ...prevState,
                    loan: !prevState.loan,
                    customers: false
                }
            })
        }
  }


    return(<>
       
        <img className='fixed z-[-1] w-full h-full' src='images/20230525_133714.jpg'></img>
        
        {/* below is the body render. above is the image background */}
        <div className={`z-[1] absolute top-1/2 text-[36px] w-full flex justify-between items-center bg-white h-auto min-h-[500px] opacity-70 hover:opacity-100`}> 
        <div className=''>
            <AdminNav renderWhich={renderWhich} />
        </div>
            <div>
                {render.loan && <LoanOriginator />}
            </div>
        <div>

        </div>
        </div>
    </>)
}