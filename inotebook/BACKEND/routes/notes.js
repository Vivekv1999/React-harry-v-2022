const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note')

//notes fetch karune apse ==> je user login 6 teni....
// route-1== get all the notes using token in header  === method  get 
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
router.post('/addnote', fetchuser, [
    body('title').isLength({ min: 3 }),
    body('description', "dddd").isLength({ min: 5 })
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



// router=3 u[adte an existingnote : put"api/note/updatenote". login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body

    //create anewNote object
    const newNote = {}
    if (title) { newNote.title = title }
    if (description) { newNote.description = description }
    if (tag) { newNote.tag = tag }

    //find the note to be updated and update it
    let note = await Note.findById(req.params.id)
    if (!note) {
        return res.status(401).send('not found')
    }


    //user aa note no 6 te check karava   //-->ahiya je user login 6btr bija ni note upadate kareva ni try karse to te nay thay mate...
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send('not allowed')
    }

    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({note})

})
module.exports = router