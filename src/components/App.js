import logo from './logo.svg';
import './App.css';
import  Header from "./components/header.jsx"
import Middle1 from "./components/middle_title.jsx"
import Middle2 from"./components/middle2.jsx"
import Middle_part3 from "./components/middle_part3.jsx"
import Content from "./object/content.jsx"
import LowerMiddle from "./components/lower-middle.jsx"

function contentMapping(Content){
  return (
    <Middle_part3
      key={Content.id}
      image={Content.img}
      image2={Content.img2}
      about={Content.about}
      about2={Content.about2}
    />
  );
}


function App() {
  return (
    <div className="App" >
          
         <Header />  
         <Middle1 /> 
         <Middle2 />

         <div  class="heading">
         <h1>Why Choose Us</h1>
         </div>

         <div class="middle-flex">
        {Content.map(contentMapping)}
           </div>
          <LowerMiddle/>
          
    </div>
  );
}

export default App;
