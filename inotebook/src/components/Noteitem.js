import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Noteitem(props) {
    const { note } = props
    return (
        <div className='col-md-4'>
            <Card>
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>{note.description}</Card.Text>
                    <i class="fa-solid fa-trash mx-2"></i>
                    <i class="fa-regular fa-pen-to-square mx-2"></i>
                    {/* <FontAwesomeIcon icon="fa-duotone fa-trash" /> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}
