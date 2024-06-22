import React, {useState} from "react"

function Middle_part3(props){
    
    const [isMouseOver, setMouseOver] = useState(false);

    function mouseOver(){
    
      setMouseOver(true);
      
    }
    
    function mouseOut(){
      setMouseOver(false);
    }
    
    const [isMouseOve, setMouseOve] = useState(false);

    function mouseOve(){
    
      setMouseOve(true);
      
    }
    
    function mouseOu(){
      setMouseOve(false);
    }
    
    
    return(
     

            <div class="column">

                 <div class="upper" style={isMouseOver?{paddingBottom:"2rem",transition:".3s"}:{height:"16rem",transition:".3s"}}
                 onMouseOver={mouseOver}
                 onMouseOut={mouseOut}>
                    <img src={props.image} alt="sdf"/>
                    <p>{props.about}</p>
                 </div>
                 <div class="lower" style={isMouseOve?{paddingTop:"2rem",transition:".3s"}:{height:"16rem",transition:".3s"}}
                 onMouseOver={mouseOve}
                 onMouseOut={mouseOu}
              >
                    <img src={props.image2}/>
                    <p>{props.about2}</p>
                 </div>
            
            
  
        </div>
    );
}

export default Middle_part3;