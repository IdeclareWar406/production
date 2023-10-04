import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { github } from '../assets'
import { SectionWrapper } from '../hoComponent'
import { projects } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { styles } from '../styles'

// projects inside the constants file will dynamically update all of the below
function Works () {

    function ProjectCard(props){
      const{index, name, description, tags, image, source_code_link} = props.project
// inside the fadeIn function the index * 0.5 allows for the projects to fadeIn one by one
      return(
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75) }>
         <Tilt
         options={{
          max:45,
          scale:1,
        speed: 450  
    
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
         >
          <div className='relative w-full h-[230px]'>
            <img   src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
            />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' onClick={()=>window.open(source_code_link, '_blank')}>
                <img src={github}
                alt={github}
                className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px] '>{name} </h3>
            <p className='text-secondary mt-2 text-[14px]'>{description} </p>

          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag,index)=>{
            return(
            <p key={tag.name} className={`text-[14px] ${tag.color} `} >
              {tag.name}
            </p>
          )})}
          </div>
         </Tilt>
        </motion.div>
      )

    }
  return (
    <>
   <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My Projects</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    <div className='w-full flex'
     
    >
      <motion.p
        variants={fadeIn('', "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30ppx] '
      >
        The following projects demonstrate my ability to create performant, creative, examples of my real-world work. The link to the gitHub repositories will be labeled below. These projects resemble my ability to solve problems throughout development and work with different technologies.
      </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
    {projects.map((project,index)=>{
      return(
        <ProjectCard key={index} project={project} index={index} />
      )
    })}
    </div>
    </>
  )
}

export default SectionWrapper(Works, "works")