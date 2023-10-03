import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoComponent'

function ServiceCard (props){
 
  return(
    <Tilt className='xs:w-[250px] w-full '>{props.service.title}
    <motion.div
      variants={fadeIn('right', 'spring',0.5 * props.index , 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
    >
<div options={{
  max:45,
  scale:1 ,
  speed: 450
}}
    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '
>
  <img src={props.service.icon} alt={props.service.title} className='w-16 h-16 object-contained' />
  <h3 className='text-white text-[20px] font-bold text-center '>{props.service.title} </h3>
</div>

    </motion.div>
    

    </Tilt>
  )
}


function About () {

  function myServices(){
  return services.map((service, index) =>{
    return(  <ServiceCard key={service.title} index={index} service={service} />
    )})
  }



  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    {/* on the motion p tag the direction is null type delay and duration  */}
    <motion.p variants={fadeIn('', '' , 0.1 , 1)}
              className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]  '
    >
      I am a skilled software developer with experience in JavaScript and experties in frameworks like React.js, Node.js, Express.js. I quickly learn new packages such as react three/fiber and cooperate on a team easily. I work well with clients collecting data about their project and develop it to their personal liking, while keeping a focus on performance of the app.

    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
    {myServices()}
    </div>
    </>
  )
}
// you can wrap an entire component with a higher order component in react by doing the below
export default SectionWrapper(About, 'about') 