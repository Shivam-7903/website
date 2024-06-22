import React ,{useState} from "react"
import image from"./img.png"
function LowerMiddle(){

   const [isMouseOver,setMouseOver]=useState( false);
    
    function mouseOver(){
        setMouseOver(true);
    }
    
    function mouseOut(){
        setMouseOver(false);
    }
    return(
        <div class="lower_middle">
               <div class="test">
                <h1>Take a Free Psychometric Test Today! Know How You Feel.</h1>
                <button style={isMouseOver?{backgroundColor:"black",color:"white",border:"0.3px solid white",transform:"scale(1.06)",transition:".2s"}:{transition:".2s"}}
                     onMouseOver={mouseOver} 
                     onMouseOut={mouseOut}  >Get Full Report</button>
               </div>
               <div class="img">
                <img src={image}/>
               </div>
        </div>
    );
}

export default LowerMiddle;