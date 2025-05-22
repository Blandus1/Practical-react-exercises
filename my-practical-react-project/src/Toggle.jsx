import { useState } from "react";

function Toggle(){
    const [isOff,setIsOff] = useState(false)
    return(
    <>
    <h1>Switch button</h1>
    <button onClick={() => setIsOff(!isOff)} >
        {isOff? "OFF" : "ON"}
    </button>
    </>
    );
}

export default Toggle