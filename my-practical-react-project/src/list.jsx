

import {useState} from 'react'

export function List (){
const [list, setList]= useState([])
const [newList, setNewList]= useState('')
const [toggle,setToggle]= useState(false)

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
        <div className="flex gap-1">
        <input type="text" placeholder="Type item..." onChange={(e)=>{setNewList(e.target.value)}} className="rounded-xl  shadow-xl bg-white"/>
        <button onClick={handleAddToList} className="bg-blue-100 rounded-xl p-1 shadow-2xl">Add to list</button>
        <button onClick={()=>setToggle(!toggle)} className="bg-blue-100 rounded-xl p-1 shadow-2xl">{toggle? "Bullet": "Numbered"}</button>
        </div>
        {/*for unordered list we use list-disc list-inside */}
        { toggle ? (
             <ol className="list-decimal list-inside">
            {list.map((item,index)=>{
                return (
                     <li key={index} className="hover:text-red-700">{item}
                    </li> 
                )
            })}
        </ol>
        ):(
             <ul className="list-disc list-inside">
            {list.map((item,index)=>{
                return (
                     <li key={index} className="hover:text-red-700">{item}
                    </li> 
                )
            })}
        </ul>
        )
        
        
        }
       
        </div>
        </>
    )
}