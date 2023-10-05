import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoComponent'
import {slideIn} from '../utils/motion'




function Contact () {
const [contactForm, setContactForm ]= React.useState({
  name: '',
  email: '',
  message: ''
})
const [loading, setLoading] = React.useState(false)
const formRef = React.useRef()


  function contactHandleChange(event){
    const {name, value} = event.target
    setContactForm(prevState=>{
      return{
        ...prevState,
        [name]: value
      }
    })

  }

  function handleSubmit(event){
    event.preventDefault()
    axios.post('/api/email', contactForm)
          .then(res => console.log(res.data))
          .catch(err = console.log(err))
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex fap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2 , 1)}
      className='flex-[0.75] rounded-2xl bg-black-100 p-8'>
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
        <label className='flex flex-col'><span className='text-white mb-4 font-medium'>Your name</span>
        <input name='name' onChange={contactHandleChange} type='text' value={contactForm.name} placeholder='what is your name?' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' ></input>
        </label>
        <label className='flex flex-col'><span className='text-white mb-4 font-medium'>Your email</span>
        <input name='email' onChange={contactHandleChange} type='email' value={contactForm.email} placeholder='what is your email?' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' ></input>
        </label>
        <label className='flex flex-col'><span className='text-white mb-4 font-medium'>What is your message</span>
        <textarea name='message' onChange={contactHandleChange} type='text' value={contactForm.message} placeholder='what do you want to say?' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' ></textarea>
        </label>
        <button className='bg-tertiary px-8 py-3 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>{loading? 'Sending' : "Send"} </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2 , 1)}
        className='xl:flex-1 xl:height-auto md:h-[560px] h-[350px]'
      >
          <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')