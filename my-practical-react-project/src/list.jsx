import {useState} from 'react'

export function List (){
const [list, setList]= useState([])
const [newList, setNewList]= useState('')

function handleAddToList(){
    const trimmed= newList.trim()
    if(!trimmed) return
setList(prev=>[...prev, newList])
setNewList('')
}

    return (
        <>
        <div className="flex flex-col w-1/2 mx-auto bg-red-100 gap-3 rounded-2xl">
        <h1 className=" flex items-center justify-center font-bold  text-red-950">List items</h1>
        <div className="flex gap-2">
        <input type="text" placeholder="Item..." onChange={(e)=>{setNewList(e.target.value)}} className="border rounded-l  shadow-2xl "/>
        <button onClick={handleAddToList} className="bg-blue-100 rounded-xl p-2 shadow-2xl">Add to list</button>
        </div>
        <ol>
            {list.map((item,index)=>{
                return (
                    
                    <li key={index}>{item}
                    <button 
                    
                    className="text-white bg-red-400 rounded border-black"> Delete</button>
                    </li>
                )

            })}
        </ol>
        </div>
        </>
    )
}