import React,{useState} from 'react'

export default function TextForm(props) {

const handleupclick =()=>{
        console.log('uppercase was clicked' + Text);
        let newText=Text.toUpperCase();
        setText(newText);
        // setText('you have cliced on handleupclick')  
    }

    const handleuplower =()=>{
        let newText=Text.toLowerCase();
        setText(newText)
    }

    const handleupclear =()=>{
        let newText="";
        setText(newText)
    }

    const handleupnew =()=>{
        let newText=Text.charAt(0).toUpperCase() + Text.slice(" ");
        setText(newText)
    }

    const handleOnchange =(event)=>{
        console.log('on change');
        setText(event.target.value)
    }
    const handlefirslatter =()=>{
        let newtext=Text.split(" ").map() 
        
    }

    const handlecapital=()=>{
        let newtext=Text.charAt(0).toUpperCase()
        setText(newtext)
    }

    const handlecopy=()=>{
        let Text=document.getElementById('mybox');
        Text.select()
        navigator.clipboard.writeText(Text.value)
    }

    const handelExtraSpace=()=>{
        let newtext=Text.split(/[ ]+/);
        setText(newtext.join(' '))
    }


    const [Text, setText] = useState("enter the text");
    // Text="dfdhd"       //u can not set text this way....in react  /wrong eay to change the state
    // setText("ready to set");        //correct way
    return (
        <>
        <div className="container my-3" style={{color: props.modee==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <textarea className="form-control" value={Text} onChange={handleOnchange}  style={{backgroundColor: props.modee==='dark'?'grey':'white', color: props.modee==='dark'?'white':'black'}} placeholder="Leave a comment here" id="mybox" rows="7"></textarea>
            <button className='btn btn-success my-2' onClick={handleupclick}>Convert to upper case</button>
            <button className='btn btn-outline-danger mx-3 my-2' onClick={handleuplower}>Convert to lower case</button>
            <button className='btn btn-warning my-2' onClick={handleupclear}>Clear text </button>
            <button className='btn btn-primary mx-3 my-2' onClick={handlecapital}>Captlize</button>
            <button className='btn btn-primary my-2' onClick={handlefirslatter}>first latter Cap.</button>
            {/* <button className='btn btn-primary mx-3 my-2' onClick={handleallcap}>All latter Cap.</button> */}
            <button className='btn btn-primary mx-3 my-2' onClick={handlecopy}>copy text</button>
            <button className='btn btn-primary my-2' onClick={handelExtraSpace}>remove space</button>
        </div>

        <div className="container" style={{color: props.modee==='dark'?'white':'black'}}>
            <h3>Your Text Summart</h3>
            <p>{Text.split(" ").length} words and {Text.length} charscters</p>
            <p>{0.008 * Text.split(" ").length} Minutes to read</p>
            <h3>preview</h3>
            <p>{Text.length>0?Text:"Enter something to preview"}</p>
        </div>
        </>
    )
};  