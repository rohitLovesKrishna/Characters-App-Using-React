import React, {useState} from 'react'


export default function TextArea(props) {
  
  const [text,setText] = useState("");
const copyText = ()=>{
  var text = document.getElementById("textContent");
  text.select();
  window.navigator.clipboard.writeText(text.value);
}

  const changeToUpperCase = ()=>{
 let updatedText = text.toUpperCase();
 setText(updatedText);
  }
  const changeToLowerCase = ()=>{
    let updatedText2 = text.toLowerCase();
    setText(updatedText2);
  }
  const changeMe = (e)=>{
    setText(e.target.value);
  }

  return (
    <>

  <h1 className="header" >{props.heading}</h1>
    <textarea  className="form-control container" id="textContent" style={props.mode === "Light"?{backgroundColor:"white"}:{backgroundColor:"grey",color:"white"}} placeholder="Enter/Paste text here..." rows={props.rows} value={text} onChange={changeMe}></textarea>
<div className='btnArea container'>
<button className='btn btn-success textBtn' onClick={changeToUpperCase}>Text To UpperCase</button>
<button className='btn btn-primary textBtn' onClick={changeToLowerCase}>Text To LowerCase</button>
<button className='btn btn-primary textBtn' onClick={copyText}>Copy Text</button>


</div>
<div className="container"><br/>
  <p><b>Text Details</b></p>
  <p>Words: {text.split(" ").length-1}<br/>Characters: {text.length}<br/></p>
  <p>{(0.48 * text.split(" ").length)<60?(0.48 * text.split(" ").length).toFixed(2)+" Seconds read":((0.48 * text.split(" ").length)/60).toFixed(2)+" Minutes read"}
   <br/>
  {((0.008* text.split(" ").length)/60).toFixed(2)} Hours read
  <br/>
  {((0.008* text.split(" ").length)/60).toFixed(2)> 24 ? (((0.008* text.split(" ").length)/60).toFixed(2)/6).toFixed(2)+" Days  read (Assuming 6 hours / day of reading)":" "}</p>
</div>
  </>
  );
  
}