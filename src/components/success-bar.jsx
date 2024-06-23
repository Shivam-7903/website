import React from "react"

function Success_bar(props){
    return(

        <div class="bar">
                 <div class="story">
                    <img src={props.photo2}/>
                    <p>{props.story}</p>
                   
                   <div class="name"> <img src={props.photo}/>
                       <div>{props.name}</div>
                       </div> 
                 </div>
        </div>
    );
}

export default Success_bar;