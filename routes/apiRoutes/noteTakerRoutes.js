const router = require('express').Router();
const { addNote, validateNote, findById, deleteByID } = require('../../lib/notes');
const { notes } = require('../../db/db');

// Routes outlined below 

// route = requesting notes data

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// route = request notes data by id

// route = post new note

// route = delete note



module.exports = router;