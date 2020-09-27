import React, {useState} from "react";
import useToggle from "./hooks/useToggle"

function CustomToggle(){
    const [isHappy, setIsHappy] = useToggle(true);
    
    // const toggle = () => {
    //     setIsHappy(!isHappy)
    // }
    
    return (
        <div>
            <h1 onClick = {setIsHappy}>{isHappy?"I am happy":"I am sad"}</h1>
        </div>
    )
}

export default CustomToggle;