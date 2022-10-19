import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext';
import Noteitem from './Noteitem';


export default function Notes() {
    const Context = useContext(noteContext)
    console.log(Context, "kk");
    const { notes, setnotes } = Context;

    return (
        <div className="row my-3">
            {notes.map((note) => {
                return   <Noteitem note={note} />
            })}
        </div>
    )
}
