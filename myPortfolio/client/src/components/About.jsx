import React from 'react'
import '../index.css'
import Footer from '../Footer'


export default function About (){


    return(<>
        <div className='aboutContainer'>
            <h1>How I got started</h1>
            <div>
                <h2>
                    My name is Ryan Suber and I am a Full-Stack JavaScript developer. I began this journey because of my interest in coding and I found a school that could teach me how to become a developer. I made other attempts learing in Unreal Engine but there was no consistent course or set instruction. No one explained in a way of why the computer reads the way it does.
                </h2>
                <h2>
                    Through those trial and error experiments I found that I enjoy solving problems with code when they come up and this keeps my mind busy. Before learning JavaScript I had a total of three jobs at this point. Right out of high school I joined the United States Air Force as an aircraft electrician. This does not directly transfer over to a civillian role and I wanted out of aircraft maintainence.
                    Being an electrician gave quite a few interesting challenges working with relays which that part of the job I truly enjoyed, I love troubleshooting and understanding why something failed or does not work. Naturally, coding seems to be the right place for me, I had just not realized it yet.
                    I then seperated from the Air Force with an honorable discharge with one deployment to the middle east and many temporary duty locations around the world. I began a production job in a factory and while it was not bad, the company had good benefits, my mind was bored, no troubleshooting, no trying new things. Same old thing day in and out, follow this procedure and that is it.
                    The last job, I was a FedEx driver while trying to figure out whether I should pursue college and what degree to get, or should I go to a technical training? I found the right path was technical training at V School which has been an amazing experience and I have learned so much about JavaScript, react.js, node.js and express.js. I am genuienly happy making new web applications and I enjoy this job along with the challenges.
                    I continue to improve and try new things when writing code to make it more re-usable while on the server end keeping data secure using bcrypt encryption and ensuring the correct data is sent back to the user. I plan to continue learning more and refining my code writing even further. If you have made it this far, thank you for taking the time to do so. I hope that we will be doing business with eachother soon.

                </h2>
            </div>
        </div>
        <Footer />
    </>)
}