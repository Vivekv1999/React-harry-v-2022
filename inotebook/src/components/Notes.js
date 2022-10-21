import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../Context/notes/noteContext';
import Addnote from './Addnote';
import Noteitem from './Noteitem';


export default function Notes() {
    const Context = useContext(noteContext)
    const { notes, getnotes, addnote } = Context;
    const ref = useRef()
    const [note, setnote] = useState({ etitle: "", edescription: "", etag: "" })
    useEffect(() => {
        getnotes()
    }, [])

    const updatenote = (currentnote) => {
        ref.current.click()
        setnote({ etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag })
        // setnote(currentnote)
    }

    ///////addnote mathi copykari-----handleclick ,,onchange
    const handleclick = (e) => {
        console.log('updating note', note);
        e.preventDefault()
    }

    const onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
        console.log(note);
    }
    return (
        <>
            <Addnote />
            <div>
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label"  >Title</label>
                                        <input type="text" className="form-control" value={note.etitle} name="etitle" id="etitle" onChange={onchange} aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label"  >Description</label>
                                        <input type="text" className="form-control" value={note.edescription} name="edescription" id="edescription" onChange={onchange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label"  >tag</label>
                                        <input type="text" className="form-control" value={note.etag} name="etag" id="etag" onChange={onchange} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleclick}>Update note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} updatenote={updatenote} />
                })}
            </div>
        </>
    )
}
