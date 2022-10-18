import React, { useState } from "react";
import NoteContext from "./noteContext";

export default function NoteState(props) {
    ///statring ama aaa state hatu pa6a lthi s1 kru ane


    return (
        <NoteContext.Provider >
            {props.children}
        </NoteContext.Provider> 
    )
}
