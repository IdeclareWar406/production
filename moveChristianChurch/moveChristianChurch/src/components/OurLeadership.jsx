import React from 'react'
import Elder from './Elder'


export default function OurLeadership(props){
    console.log(props.elders)

    return(
        <div className='displayedAbout'>
            <div className='aboutTitle'> <h1>Our Leadership</h1></div>
            <h2>Lead Pastor - Shane Mullins</h2>
            <h3>Shane began here in July of 2015. Shane is originally from Terre Haute, Indiana, and is a graduate of Johnson University in Knoxville, TN. Shane and his wife, Renea, have four sons and two daughters. Shane loves Jesus, and loves people. </h3>
            <h2>Senior Adult Pastor - Freddie Wellborn</h2>
            <h3>Freddie has previously served our church, in its earlier years, as the lead minister.  He now serves as pastor to our seniors, and hosts an in-depth bible study on Sunday mornings.  Freddy was married to his late wife, Wendy for 50+ years.  He is a real blessing to Move Christian Church. </h3>
            <h2>Youth Pastor - Dalton Smith</h2>
            <h3>Dalton has been working with our youth since August of 2019. He has one daughter, and loves the Lord!</h3>
            <h2>Kids on the Move Director - Malynn Petty</h2>
           <Elder elder={props.elders} />
        </div>
    )
}