import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clciked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }
  
  const handleLoClick=()=>{
    console.log("LowerCase was clciked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }
  
  const handleOnChange=(event)=>{
    console.log("onChange");
    setText(event.target.value);
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success");
  }
  const handleExtraSpaces=()=>{
    var newText=text.split(/[  ]+/);
    setText(newText.join(" "))
    props.showAlert("ExtraSpaces handled","success");
  }
  const handleClearText=()=>{
    setText("")
    props.showAlert("Text Cleared","success");
  }

  const [text, setText] = useState('');

 
return (
  <>

  <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <buttton className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase </buttton>
      <buttton className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase </buttton>
      <buttton className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text </buttton>
      <buttton className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</buttton>
      <buttton className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</buttton>
      </div>

      
      
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>

</>   
  )
}
