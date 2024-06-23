import React from "react";
import image from "./skewedRectangleBack-CVHdr9Tq.svg";

function Form() {
    return (
        <div className="form" >
            <div class="inside_form">
                <h1>
                    LET'S CHAT ABOUT YOUR CAREER
                </h1>
                <h3>First Name:</h3>
                <input type="text" id="fname" name="fname" placeholder=" Your first name"></input>
                <h3>last Name:</h3>
                <input type="text" id="fname" name="fname"placeholder=" Your last name"></input>
                <h3>Email:</h3>
                <input type="text" id="fname" name="fname" placeholder=" Your email address"></input>
                <h3>Write your message:</h3>
                <input type="text" className="input" name="fname" placeholder=" Your text here..."></input>
                <button>SUBMIT</button>
            </div>
            
        </div>
    );
}

export default Form;
