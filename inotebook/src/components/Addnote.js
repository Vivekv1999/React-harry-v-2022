import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/noteContext';
import Notes from './Notes';
// import Addnote from './Addnote';


export default function Addnote(props) {
  const Context = useContext(noteContext)
  const { addnote } = Context;

  const [note, setnote] = useState({ title: "", description: "", tag: "" })

  const handleclick = (e) => {
    e.preventDefault()
    addnote(note.title, note.description, note.tag)
    setnote({title: "", description: "", tag: ""  })
    props.showAlert("note added succesfully","success")
  }

  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value })
    console.log(note);
  }


  return (
    <div>

      <div className="container my-3">
        <h1>Add note</h1>
        <form onSubmit={handleclick}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label"  >Title</label>
            <input type="text" className="form-control" name="title" id="title"   value={note.title} onChange={onchange} aria-describedby="emailHelp" required minLength={5} />
            {/* reqied minLength={5}  ahiya work naji=hi kare video--68---->jo onsubmit par handelclcik hae to j work karse  */}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label"  >Description</label>
            <input type="text" className="form-control" name="description" id="description" value={note.description} onChange={onchange} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label"  >tag</label>
            <input type="text" className="form-control" name="tag" id="tag" value={note.tag} onChange={onchange} />
          </div>
          <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" >Add note</button>
        </form>
      </div>
    </div>
  )
}
