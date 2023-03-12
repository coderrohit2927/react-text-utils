import React, {useState} from 'react'

export default function TextForm(props) {
 const handleUpClick = () => {
    
    let newText = text.toUpperCase();
    setText(newText)
 }
 const handlelowClick = () => {
    
   let newText = text.toLowerCase();
   setText(newText)
}
 const handleOnChange = (event) => {
    
    setText(event.target.value);
 }
 const handleclrClick = () => { 
   let newText = '';
   setText(newText);
}
 
 const [text, setText] = useState('Enter text here');
 
  return (
   <>
    <div className='container'>
        <h1 className='text-center'>{props.heading}</h1>
        <div className="mb-3">  
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
    </div>
    <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
    <button type="button" className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lower case</button>
    <button type="button" className="btn btn-primary mx-2" onClick={handleclrClick}>clear All</button>
    </div>

    <div className='container my-3'>
     <h1>Your Text summary</h1>
     <p>{text.split(" ").length} words and { text.length } character</p>
     
<p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
    </div>
    </>
  )
}
// TextForm.prototype = {heading:PropTypes.string
                      
// }