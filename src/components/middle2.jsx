import React, { useState } from "react";
import logo from "./1stlog.svg";
import logo2 from "./2ndlogo.svg";
import logo3 from "./3rdlogo.svg";

function Middle2() {
 
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

  const [isMouseOv, setMouseOv] = useState(false);

  function mouseOv(){
    setMouseOv(true);
  }

  function mouseO(){
    setMouseOv(false);
  }

  return (
    <div className="mid">
      <div className="middle2">
      
        <div className="content" id="mid1" style={isMouseOver?{width:"50%",transition:".3s"}:{transition:".3s"}}
                     onMouseOver={mouseOver} 
                     onMouseOut={mouseOut} >
          <div className="cont">
            <img src={logo} alt="Logo 1" />
            <div>
              <h3>Class 9th & 10th</h3>
              <p>Guidance for the right combination and subjects (stream selection)</p>
            </div>
          </div>
        </div>

        <div className="content" id="mid2"style={isMouseOve?{width:"50%",transition:".3s"}:{transition:".3s"}}
                     onMouseOver={mouseOve} 
                     onMouseOut={mouseOu} >
          <div className="cont">
            <img src={logo2} alt="Logo 2" />
            <div>
              <h3>Class 11th & 12th</h3>
              <p>Expert advice on stream selection and career paths</p>
            </div>
          </div>
        </div>

        <div className="content" id="mid3"style={isMouseOv ?{width:"50%",transition:".3s"}:{transition:".3s"}}
                     onMouseOver={mouseOv} 
                     onMouseOut={mouseO}>
          <div className="cont" id="cont3">
            <img src={logo3} alt="Logo 3" />
            <div>
              <h3>College Admissions</h3>
              <p>Insights for university entrance exams and applications</p>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={image}/> */}
    </div>
  );
}

export default Middle2;
