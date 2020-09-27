import React, {useState} from "react"
import useInputChange from "./hooks/useInputChangeHook"

function SimpleHook(){
    const [email, updateEmail,reset] = useInputChange("");
    return (
        <div>
            <h3>{email}</h3>
            <input type="email" value = {email} onChange = {updateEmail} />
            <button onClick = {reset}>Submit</button>
          </div>
    )
}

export default SimpleHook;