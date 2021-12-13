import React, { useState } from 'react'


export default function Tables(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = () => {
        console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log('On change');
        setText(event.target.value);
    }

    const handleCopy = () => {
        var copyText = document.getElementById('myBox');

        /* Select the text field */
        copyText.select();
        // copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();

        // /* Alert the copied text */
        // alert("Copied the text: " + copyText.value);
    }

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, SetBtnText] = useState('Enable Dark mode')

    const toogleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            SetBtnText('Enable Light Mode')
        }

        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            SetBtnText('Enable Dark Mode')
        }


    }


    return (
        <div className="container" >
        {/* < div className="container" style={myStyle}> */}
            <div className="mb-3 my-3" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
                <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>

            </div>
            <div className="container my-2"  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} >
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} word {text.length} characters</p>
                <p>{(0.008 * text.split(' ').length).toFixed(2)} Minutes read</p>
            </div>
            <div className="container my-3" >
                <button onClick={toogleStyle} type='button' className='btn btn-primary'>{btnText}</button>
            </div>
         </div> 
    )
}
