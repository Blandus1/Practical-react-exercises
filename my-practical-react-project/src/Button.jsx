import { useState } from "react";
function Button(){
const [count,setCount] = useState(0)
    return(
        <>
        <h1>My counter app</h1>
        <h2>Current count:{count} </h2>
        <button onClick={()=> setCount(count+1)} className="button">Increase </button>
        <button onClick={()=> setCount( count -1)} className="button">Decrease </button>


        </>
    );
}
export default Button