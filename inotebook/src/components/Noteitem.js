import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/noteContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Noteitem(props) {
    const Context = useContext(noteContext)
    const {deletenote } = Context;
    
    const { note } = props
    return (
        <div className='col-md-4'>
            <Card>
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>{note.description}</Card.Text>
                    <i class="fa-solid fa-trash mx-2" onClick={()=>{deletenote(note._id)}}></i>
                    <i class="fa-regular fa-pen-to-square mx-2"></i>
                    {/* <FontAwesomeIcon icon="fa-duotone fa-trash" /> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}
