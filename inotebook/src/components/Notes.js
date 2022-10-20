import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext';
import Addnote from './Addnote';
import Noteitem from './Noteitem';


export default function Notes() {
    const Context = useContext(noteContext)
    const { notes, addnote } = Context;

    return (
        <>
            <Addnote />
            <div className="row my-3">
                {notes.map((note) => {
                    return <Noteitem note={note} />
                })}
            </div>
        </>
    )
}
