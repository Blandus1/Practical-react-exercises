import {useState} from 'react'

export function RealTimeInput(){
const [text, setText]= useState('')
    return(
        <>
        <div className="flex flex-col justify-center items-center gap-2 rounded-2xl p-10 bg-gray-200 w-1/2 mx-auto">
            <h1 className="font-bold">Real time input</h1>
            <input type="text" placeholder="Text..."  onChange={e=>setText(e.target.value)} className="border rounded-l shadow-2xl"/>
            <h3>The current text is: {text}</h3>

        </div>
        </>
    )
}