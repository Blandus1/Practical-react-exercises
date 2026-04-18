import {useState} from 'react'


export function Counter(){
const [count, setCount] = useState(0)

function handleAdd(){
    setCount(prev=>prev + 1)
}

function handleNeg(){
    setCount(prev=>prev - 1)
}

return(
    <>
    <div className="flex flex-col bg-amber-200 gap-2 rounded-2xl justify-center items-center w-1/2 mx-auto p-10 ">
        <h1 className="font-extrabold">Counter App</h1>
        <div>
        <h3 className="font-extralight">count: {count}</h3>
        <button onClick={handleAdd} className="bg-blue-100 text-blue-800 shadow-xl rounded-xl p-1.5 ">
            Add
        </button>
        <button onClick={handleNeg} className="bg-blue-100  text-blue-800 shadow-xl rounded-xl p-1.5">
            Negate
        </button>

        </div>
      
    </div>
    </>
)
}