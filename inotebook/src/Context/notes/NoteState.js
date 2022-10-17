import React, { useState } from "react";
import NoteContext from "./noteContext";

export default function NoteState(props) {
    const s1 = {
        "name": "Harry",
        "class": "5b"
    }
    const [state,setstate]=useState(s1)
    const update=()=>{
        setTimeout(()=>{
            setstate({
                "name":"larry",
                "class":"10b"
            })
        },1000)
    }

    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider> 
    )
}
