import React, { useState } from "react";
import NoteContext from "./noteContext";

export default function NoteState(props) {
    ///statring ama aaa state hatu pa6a lthi s1 kru ane
   const intialnote= [
        {
          "_id": "634a9d0395d61527314d1de7",
          "user": "63483078ade77a3ff56946a3",
          "title": "on moon",
          "description": "please",
          "tag": "one",
          "__v": 0
        },
        {
          "_id": "634ac0ec4e7d1a630c4c2126",
          "user": "63483078ade77a3ff56946a3",
          "title": "fire upadae street",
          "description": "on walk fire street you can ...update ",
          "tag": "fire update",
          "__v": 0
        },
        {
          "_id": "634bfd310bb61bc724beddb2",
          "user": "63483078ade77a3ff56946a3",
          "title": "wise ",
          "description": "rose finfd a good ...",
          "tag": "flower",
          "__v": 0
        }
      ]
      const [notes,setnotes]=useState(intialnote)


    return (
        <NoteContext.Provider value={{notes,setnotes}} >
            {props.children}
        </NoteContext.Provider> 
    )
}
