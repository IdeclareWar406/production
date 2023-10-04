import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css';

import {styles} from '../styles'

import {experiences} from '../constants'
import { SectionWrapper } from '../hoComponent';
import { textVariant } from '../utils/motion';

function Experience () {

function ExperienceCard (props){
return <VerticalTimelineElement
                contentStyle={{background: '#1d1836', color: '#fff'}}
                contentArrowStyle={{borderRight: '7px solid #232631'}}
                date={props.experience.date}
                iconStyle={{background: props.experience.iconBg}}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img src={props.experience.icon}
                  alt={props.experience.company_name}
                  className='w-[60%] h-[60%] object-contain ' />
                </div>}
>
<div>
  <h3 className='text- white text-[24px] font-bold'>{props.experience.title} </h3>
  <p className='text-secondary text-[16px] font-semibold ' style={{margin: 0}}>{props.experience.company_name} </p>
  <ul className='mt-5 list-disc ml-5 space-y-2'>
    {props.experience.points.map((point,index)=>{
      <li
        key={index}
        className='text-white-00 text-[14] pl-1 tracking-wider '
      >
        {props.experience.point}
      </li>
    })}
  </ul>
</div>
</VerticalTimelineElement>
}

  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work History</h2>
    </motion.div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
      {experiences.map((experience, index)=>{
        return <ExperienceCard key={index} experience={experience} />
      })}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')