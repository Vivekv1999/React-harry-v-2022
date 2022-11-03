import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../Context/notes/noteContext';
import Addnote from './Addnote';
import Noteitem from './Noteitem';
import {useNavigate} from 'react-router-dom'

export default function Notes(props) {
    const nevigate= useNavigate()
    const Context = useContext(noteContext)
    const { notes, getnotes, editnote } = Context;
    const ref = useRef()
    const refclose = useRef()
    const [note, setnote] = useState({id:" ",etitle: "", edescription: "", etag: "" })
    useEffect(() => {
        if(localStorage.getItem('token')){
            getnotes()
        }
        else{
            nevigate('/login')
        }
    }, [])

    const updatenote = (currentnote) => {
        ref.current.click()
        setnote({ id:currentnote._id,etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag })
       
        // setnote(currentnote)
    }

    ///////addnote mathi copykari-----handleclick ,,onchange
    const handleclick = (e) => {
        console.log('updating note', note);
        e.preventDefault()
        editnote(note.id,note.etitle,note.edescription,note.etag)
        refclose.current.click()
        props.showAlert("note added succesfully","success")
    }

    const onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
        console.log(note);
    }
    return (
        <>
            <Addnote showAlert={props.showAlert} />
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
                                <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleclick}>Update note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <div className="container mx-3">
                    {notes.length===0 && 'no notes to dispaly'}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} updatenote={updatenote} showAlert={props.showAlert} />
                })}
            </div>
        </>
    )
}
