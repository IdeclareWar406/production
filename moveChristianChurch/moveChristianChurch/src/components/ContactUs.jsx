import React from 'react'
import axios from 'axios'
import '../index.css'
export default function ContactUs(){
    document.body.style.backgroundColor = 'black'
    const [contactUs, setContactUs] = React.useState({
        name:"",
        email: "",
        question: ""
    })
    const [serverRes, setServerRes] = React.useState('')


    function handleContactChange (event){
        const {name, value} = event.target
        setContactUs(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    function submitEmail(event){
        event.preventDefault()
        if(contactUs.name && contactUs.email && contactUs.question != ""){
        axios.post('/api/contactemail',contactUs)
            .then(res => setServerRes(res.data))
            .catch(err => setServerRes(err.response.data.message))}
        else setServerRes('All information is required')
    }





    return(
        <>
        <div className='contactUs'>
            <h1>Contact Us</h1>
            <form className='contactForm' onSubmit={submitEmail}>
                <input className='contactName' type='text' name='name' placeholder='Full name' onChange={handleContactChange}></input>
                <input className='contactName' type='email' name='email' placeholder='email' onChange={handleContactChange}></input>
                <textarea className='contactQuestion' name='question' placeholder='Ask us anything' onChange={handleContactChange}></textarea>
                <button className='contactSubmit'>Submit</button>
            </form>
            <h2>{serverRes} </h2>
        </div>
        </>
    )
}