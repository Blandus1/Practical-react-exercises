import {useState} from 'react'

export function RealTimeInput(){
const [text, setText]= useState('')
    return(
        <>
        <div>
            <h1 className="font-bold">Real time input</h1>
            <input type="text" placeholder="Text..."  onChange={e=>setText(e.target.value)} className="border rounded-l shadow-2xl"/>
            <h3>The current text is: {text}</h3>

        </div>
        </>
    )
}