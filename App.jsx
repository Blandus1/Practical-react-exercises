//import {useState} from 'react'


/*export default function ToggleLoading() {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div>
      <p>The data is {isLoading ? 'Loading' : 'Not Loading'}</p>
      <button onClick={() => setIsLoading(true)}>
        Turn Loading On
      </button>
      <button onClick={() => setIsLoading(false)}>
        Turn Loading Off
      </button>
    </div>
  );
}
 


export default function App() {
 const [newItem,setNewItem] = useState("")
 const [todos,setTodos]= useState([])

 function handleSubmit(e){
e.preventDefault() // this prevents the page from refreshing whenever I press the add button
 
setTodos( () => {
  return  [...todos,{id:crypto.randomUUID(), title: newItem, completed:false}]
})
setNewItem("")
 
} //When we want to modify our data, we give our setter function an anymous function because whenit doesn't have it have it, it can give an infinite loop.
function toggleTodo(id,completed)  {
  setTodos(currentTodos =>{
    return currentTodos.map(todo =>{
       if(todo.id === id){
        return {...todo,completed}
       }
    })
  })
}

return (
    <>
    <div>
      <form onSubmit ={handleSubmit}>
        <label>
            New item
        </label>
        <input value= {newItem} onChange= {(e)=>setNewItem(e.target.value)} type="text"></input>
     
        <button>Add</button>
      </form>
      <h1>To-do list</h1>
      <ul>
        {todos.map(todo => {
          return 
        })}
        <li key={todo.id}> // this key works as a unique identifier for each item in the list and so list must have key property
          <label>
            <input type="checkbox" checked={todos.completed} onChange={e => toggleTodo(todo.id,e.target.checked)}/> 
            {todos.title}
          </label>
          <buttton>delete</buttton>
        </li>
        <li>
          <label>
            <input/> 
            Item 2
          </label>
          <buttton>delete</buttton>
        </li>
      </ul>
      </div>
    </>
  )
}*/

// export default function Counter() {
//   const [count, setCount] = useState(0);
 
//   const increment = () => setCount(prevCount => prevCount + 1);
 
//   return (
//     <div>
//       <p>Wow, you've clicked that button: {count} times</p>
//       <button onClick={increment}>Click here!</button>
//     </div>
//   );
// }
import Context from './Context';
import Todo from './Todo';
import Effect from './Effect'
import GuineaPigs from './GuineaPigs';  


function App(){
  return(
    <>
    <Todo/>
    <Context/>
    <Effect/>
    <GuineaPigs/>
    </>
  )
};
  
export default App;
