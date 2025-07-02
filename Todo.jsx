import { useState } from 'react'

function Todo(){

    const [value,setValue] = useState('')
    const [button,setButton] = useState([])
    const [deletevalue,setDeletevalue] = useState([])

const handleChange= (e) =>{
    setValue(e.target.value)
}

const handleClick =(e) =>{
    e.preventDefault() //we used preventDefault because our button is in a form which has a reload default behavior
    setButton((prev) => [...prev,value])// because it is for a button
};
    
const handleDeletevalue= (deleted) =>{
    setButton(button.filter((_,index) => index !== deleted))
}

    return(
    <form>
    <h1>My To-do app</h1>
    <input value={value} onChange={handleChange} type='text' placeholder="enter text"/>
    <button value={button} type= "button" onClick={handleClick}>Add</button>

    <ol>
        {button.map((item,index) => {
        return <li key={index}>{item}</li>
        })}
      <button onClick={handleDeletevalue}>Delete</button>
    </ol>
    </form>
    );
}

export default Todo;