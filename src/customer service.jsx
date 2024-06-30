import React from "react"
import arrow from "./arrow.svg"
import download from "./download.svg"
import image from "./image.svg"
function Services(){
    return(
        <div class="service">
              <div class="left" style={{display:"flex",flexDirection:"column",gap:"1rem",marginLeft:"5rem"}}>
                <h3 style={{fontWeight:"normal"}}>CUSTOMER SERVICE</h3>
                <h1 style={{width:"20rem",fontSize:"2.8rem",fontWeight:"700"}}>Subscribe our 24*7 customer service</h1>


               <div class="inputBox" > <input type="text" id="email" name="fname" placeholder=" Enter your email"   style={{border:"0px"}}></input>
                 <img src={arrow} style={{width:"3.3rem"}}/></div>
                <div class="email"></div>
              </div>
              
              
              <div class="right" style={{display:"flex",justifyContent:"space-between",width:"50vw"}}>
                <img style={{marginLeft:"4rem"}} src={image}></img>
               <img style={{marginBottom:"13rem"}}src={download}></img>
              </div>
             
              
        </div>
    );
}

export default Services;