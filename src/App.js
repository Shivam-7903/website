import logo from './logo.svg';
import './App.css';
import  Header from "./components/header.jsx"
import Middle1 from "./components/middle_title.jsx"
import Middle2 from"./components/middle2.jsx"
import Middle_part3 from "./components/middle_part3.jsx"
import Content from "./object/content.jsx"
import LowerMiddle from "./components/lower-middle.jsx"
import Success_bar from "./components/success-bar.jsx"
import Stories from "./object/stories.jsx"
import Form from "./form.jsx"
import Questions from"./questoins.jsx"
import Services from "./customer service.jsx"
function storyMapping(item){
  return (
    <Success_bar
      key={item.id}
      photo={item.img}
       photo2={item.img2}
      name={item.name}
      story={item.story}
      
     
    />
    
  );
}


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
          <div  class="headin" style={{fontSize:"larger",marginTop:"0rem"}}>
         <h1>Our success stories!</h1>
         </div>
          <div class="stories" id="stories">
        {Stories.map(storyMapping)}
        {Stories.map(storyMapping)}
           </div>

          <Form/> 
          <div  class="headin" style={{fontSize:"larger",marginTop:"0rem"}}>
         <h1>Frequently Asked Questions!</h1>
         </div>
          <Questions/>
          <Services/>
    </div>
  );
}

export default App;
