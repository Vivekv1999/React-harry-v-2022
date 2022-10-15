const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note')

//notes fetch karune apse ==> je user login 6 teni....
// route-1==get all the notes using  get 
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("some Error occured")
    }
})

// router=2 add a new note with   POST-method
router.post('/addnote', fetchuser,[
    body('title').isLength({ min: 3 }),
    body('description',"dddd").isLength({ min: 5 })
], async (req, res) => {

    try {
        //if there are eror ,returne bad request Error
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() })
            
        }
        const { title, description, tag } = req.body
        // console.log(req.body);
        
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savenote = await note.save()
        res.json(savenote)
    }
     catch (error) {
        console.log(error.message);
        res.status(500).send("some Error occured")
    }
})

module.exports = router