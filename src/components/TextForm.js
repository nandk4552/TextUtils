import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was Clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleClearClick = () =>{
        // console.log("Uppercase was Clicked : " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");

    }
    const handleLoClick = () =>{
        // console.log("Uppercase was Clicked : " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);

    }

    // remove Extra Spaces
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success")
    }



    // copy function
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard!", "success");

    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'dark'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">                
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'dark'}}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
