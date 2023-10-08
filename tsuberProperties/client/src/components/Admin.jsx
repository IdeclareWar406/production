import React from 'react'
import AdminNav from './AdminNav'
import LoanOriginator from './LoanOriginator'
import { ApiContext } from '../ApiContext'
import CustomerTemplate from './CustomerTemplate'

export default function Admin(){
    const{adminData} = React.useContext(ApiContext)

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

  React.useEffect(()=>{
    adminData()
  },[])


    return(<>
       
        <img className='fixed z-[-1] w-full h-full' src='images/20230525_133714.jpg'></img>
        
        {/* below is the body render. above is the image background */}
        {/* write an if statment giving us what we would like based on screen size */}
        <div className={`z-[1] absolute top-1/2 text-[36px] w-full flex justify-between items-center bg-white h-auto min-h-[500px] opacity-70 hover:opacity-100 `}> 
        <div className='h-auto min-h-[500px]' style={{border: 'solid black 3px'}}>
            <AdminNav renderWhich={renderWhich} />
        </div>
            <div className='flex flex-wrap'>
                {render.customers && <CustomerTemplate />}
                {render.loan && <LoanOriginator />}
            </div>
        <div>

        </div>
        </div>
    </>)
}