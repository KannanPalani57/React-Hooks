import React, {useState} from "react"

export default function useInputChange(val)  {
    const [value, setValue] = useState(val);
    const updateChange = e =>{
        setValue(e.target.value);
    };
    const reset = () =>{
        setValue("")
    }
    return [value, updateChange,reset]
}

