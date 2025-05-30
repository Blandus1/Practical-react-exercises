import { useState } from 'react'

function TextBox(){
    const [text,setText]= useState('')
    function handleChange(e){
      setText(e.target.value);
    }
    return (
        <>
        <form>
            <h1> Real-time input</h1>
            <input type="text" onChange={handleChange} placeholder='text...'></input>
            <p>current text:{text}</p>
        </form>
        </>
    );
}
 export default TextBox