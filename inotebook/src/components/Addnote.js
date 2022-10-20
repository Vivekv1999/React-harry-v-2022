import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/noteContext';
// import Addnote from './Addnote';


export default function Addnote() {
  const Context = useContext(noteContext)
  const {addnote } = Context;

  const [note,setnote]=useState({title:"",description:"",tag:""})

  const handleclick=(e)=>{
    e.preventDefault()
    addnote(note.title,note.description,note.tag)
  }

  const onchange=(e)=>{
    setnote({...note,[e.target.name]:e.target.value})
    console.log(note);
  }


  return (
    <div>

      <div className="container my-3">
        <h1>Add note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label"  >Title</label>
            <input type="text" className="form-control" name="title" id="title" onChange={onchange} aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label"  >Description</label>
            <input type="text" className="form-control" name="description" id="description" onChange={onchange} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleclick}>Add note</button>
        </form>
      </div>
    </div>
  )
}
