import { useState } from 'react';

function Button(){
 const [on,setOn]=useState(false)
    return(
        <>
        <h2>My switch button</h2>
        <button onClick ={()=>setOn(!on )}> switch me </button>
        <p>{on? 'ON': 'OFF'} </p>
        </>
    );
}

export default Button