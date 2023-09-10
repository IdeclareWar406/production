import React from "react"
import "../index.css"

export default function Home (){
document.body.style.backgroundColor = "black"

    


 return(<div>
        <div className="homePic">
            
        <img className="churchLogo" src="public/images/logo.png" width={"600px"}></img>
        </div>
        <div className="motto">
            <div className="imgMotto">
           
            <img className="ourMotto" src="public/images/moveHomePic.jpg" ></img>
            </div>
            <h2>Our service times are listed below</h2>
            <div className="serviceTimes">
                <div className="days">
                    <h2>Sunday Morning Study</h2>
                    <h2>Sunday Service</h2>
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
            <img src="https://drive.google.com/uc?export=open&id=1IDZ2LbU56ZLmxh8TKzNu22EvUSeeBP1v" width={"50px"}></img>
            </a>
            <a href="https://www.facebook.com/movechristian.church" target="_blank">
            <img src="https://drive.google.com/uc?export=open&id=1YQx2xs9Hp2tzNBJGQU3YiM0eWlK53jGK" width={"50px"}></img>
            </a>

            <a href="https://www.instagram.com/movechristianchurch/" target="_blank">
                <img src="https://drive.google.com/uc?export=open&id=1xr2nYe2uCaNWaKjkBS5TCz1QZ5FchzEc" width={"50px"}></img>
            </a>
            </div>

        </div>


        <div className="homeFooter">
            <h2 style={{color: "white"}} > Our location is 1501 Whispering Pines Rd, Albany, GA</h2><a  className="directions" href="https://www.google.com/maps/place/Move+Christian+Church/@31.605381,-84.185001,15z/data=!4m6!3m5!1s0x88f27bf5efc37f83:0x8436521efbd5f2d!8m2!3d31.6054188!4d-84.1845076!16s%2Fg%2F1tp0fhnr?entry=ttu" target="_blank">Directions</a> 
            <h2 style={{color:"white"}} >Email us at staff@movechristianchurch.com with any questions you may have</h2>
        </div>
        </div>)
}