import {useState} from 'react'

export function ReactTimeInput(){
const [text, setText]= useState('')
    return(
        <>
        <div>
            <h1>Real time input</h1>
            <input type="text" placeholder="Text..."  onChange={e=>setText(e.target.value)} value={text}/>
            <h3>The current text is: {text}</h3>

        </div>
        </>
    )
}