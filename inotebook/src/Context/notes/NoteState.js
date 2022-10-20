import React, { useState } from "react";
import NoteContext from "./noteContext";

export default function NoteState(props) {
  ///statring ama aaa state hatu pa6a lthi s1 kru ane
  const intialnote = [
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

  //Add note
  const addnote = (title, description, tag) => {
    ///  TODO : api call
    const note = {
      "_id": "634bfd310bb61bc724beddb2",
      "user": "63483078ade77a3ff56946a3",
      "title": title,
      "description": description,
      "tag": tag,
      "__v": 0
    }
    setnotes(notes.concat(note))
  }

  //Delete note
  const deletenote = (id) => {
    console.log('deleteing...',id);
    ///  TODO : api call
    const newnote= notes.filter((note)=>{ return note._id!=id})
    setnotes(newnote)

  }

  //Upafte note
  const editnote = () => {
    
  }
  const [notes, setnotes] = useState(intialnote)


  return (
    <NoteContext.Provider value={{ notes, setnotes, addnote, deletenote, editnote }} >
      {props.children}
    </NoteContext.Provider>
  )
}
