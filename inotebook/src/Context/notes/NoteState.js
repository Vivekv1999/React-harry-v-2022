import React, { useState } from "react";
import NoteContext from "./noteContext";

export default function NoteState(props) {

  const host = "http://localhost:5000"
  ///statring ama aaa state hatu pa6a lthi s1 kru ane
  const intialnote = []

  ////==========================///get all note ===========
  const getnotes = async () => {
    //------>api callll
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ODMwNzhhZGU3N2EzZmY1Njk0NmEzIn0sImlhdCI6MTY2NTc1NDAwN30.GRNMeH_jF7ANhWT-XeUF34TchK1dbxFJHXNmuTC8MU8',
        'Content-Type': 'application/json'
      }
    });
    const jsonnn = await response.json()
    console.log(jsonnn, "llllll");
    setnotes(jsonnn)
  }

  ///=========================///////Add note
  const addnote = async (title, description, tag) => {
    //------>api callll
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ODMwNzhhZGU3N2EzZmY1Njk0NmEzIn0sImlhdCI6MTY2NTc1NDAwN30.GRNMeH_jF7ANhWT-XeUF34TchK1dbxFJHXNmuTC8MU8',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
    });
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

  ///=============>>>>>>================//Delete note
  const deletenote = async (id) => {
    console.log('deleteing...', id);
    ///  TODO : api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ODMwNzhhZGU3N2EzZmY1Njk0NmEzIn0sImlhdCI6MTY2NTc1NDAwN30.GRNMeH_jF7ANhWT-XeUF34TchK1dbxFJHXNmuTC8MU8',
        'Content-Type': 'application/json'
      },
    });
    const jsonnn = await response.json();
    console.log(jsonnn);
    ////////////---client side delete
    const newnote = notes.filter((note) => { return note._id !== id })
    setnotes(newnote)
  }

  //=============>>>>>>================//Edit note
  const editnote = async (id, title, description, tag) => {
    //addd fetch ---api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ODMwNzhhZGU3N2EzZmY1Njk0NmEzIn0sImlhdCI6MTY2NTc1NDAwN30.GRNMeH_jF7ANhWT-XeUF34TchK1dbxFJHXNmuTC8MU8',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
    });
    const jsonnn = await response.json();
    console.log(jsonnn);


    //logicc to edit note in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index]
      if (element._id === id) {
        element.title = title
        element.description = description
        element.tag = tag
      }
    }
  }
  const [notes, setnotes] = useState(intialnote)


  return (
    <NoteContext.Provider value={{ notes, setnotes, addnote, deletenote, editnote, getnotes }} >
      {props.children}
    </NoteContext.Provider>
  )
}
