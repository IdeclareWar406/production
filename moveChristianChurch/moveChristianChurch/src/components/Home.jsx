import React from "react"
import "../index.css"

export default function Home (){
document.body.style.backgroundColor = "black"

    


 return(<div>
        <div className="homePic">
            
        <img className="churchLogo" src="images/logo.png" width={"600px"}></img>
        </div>
        <div className="motto">
            <div className="imgMotto">
           
            <img className="ourMotto" src="images/moveHomePic.jpg" ></img>
            </div>
            <h2>Our service times are listed below</h2>
            <div className="serviceTimes">
                <div className="days">
                    <h2>Sunday Morning Study</h2>
                    <h2>Sunday Gathering</h2>
                    <h2>Wednesday Study</h2>
                </div>
                <div className="times">
              <h2>9:30am</h2>
              <h2>10:30am</h2>
              <h2>6:30pm</h2>
                </div>
                
            </div>
            <h2>Check our events page for more information</h2>
            <div className="socialMediaImg">
            <a href="https://www.youtube.com/channel/UC6N06_jMBnAfnEMaDijAozg" target="_blank">
            <img src="/images/youtube.png" width={"50px"}></img>
            </a>
            <a href="https://www.facebook.com/movechristian.church" target="_blank">
            <img src="/images/facebook.png" width={"50px"}></img>
            </a>

            <a href="https://www.instagram.com/movechristianchurch/" target="_blank">
                <img src="/images/instagram.png" width={"50px"}></img>
            </a>
            </div>

        </div>


        <div className="homeFooter">
            <h2 className="ourAddress" style={{color: "white"}} > Our location is 1501 Whispering Pines Rd, Albany, GA</h2><a  className="directions" href="https://www.google.com/maps/place/Move+Christian+Church/@31.605381,-84.185001,15z/data=!4m6!3m5!1s0x88f27bf5efc37f83:0x8436521efbd5f2d!8m2!3d31.6054188!4d-84.1845076!16s%2Fg%2F1tp0fhnr?entry=ttu" target="_blank">Directions</a> 
            <h2  className="ourEmail" style={{color:"white"}} >Email us at staff@movechristianchurch.com with any questions you may have</h2>
        </div>
        </div>)
}