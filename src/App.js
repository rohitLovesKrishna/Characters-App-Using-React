import React,{useState} from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Navbar from './MyComponets/Navbar.js'
import TextArea from './MyComponets/TextArea.js';
import About from './MyComponets/About';
import './App.css';

function App() {
  const [mode1,setMode]=useState("Light");
  const toggleMode = ()=>{
    if(mode1 === "Dark"){
      setMode("Light");
      document.body.style.backgroundColor ="white";
      document.body.style.color = "black";
    }
    else{setMode("Dark")
    document.body.style.backgroundColor ="black";
    document.body.style.color = "white";
  }}
  return (
    <Router>
    <div className='App'>
 
<Navbar title="CharInfo" about={<Link style={{textDecoration:"none",color:"#454545"}} to="/about">About</Link>} home={<Link style={{textDecoration:"none",color:"#454545"}} to="/home">Home</Link>} placeholder="Search" mode ={mode1} toggle = {toggleMode}/>
<div className="container">
  <Routes>

  <Route exact path='/home' element={<TextArea rows={10} heading="Paste Your Content Here" mode = {mode1}/>}></Route>
  <Route exact path='/about' element={<About/>}></Route>
  <Route exact path='' element={<TextArea rows={10} heading="Paste Your Content Here" mode = {mode1}/>}></Route>

  </Routes>

</div>

</div>
</Router>
  );
}

export default App;
