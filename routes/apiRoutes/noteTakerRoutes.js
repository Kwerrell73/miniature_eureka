const router = require('express').Router();
const { addNote, validateNote, findNoteById, deleteNoteByID } = require('../../lib/notes');
const { notes } = require('../../db/db');

// Routes outlined below 

// route = requesting notes data

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// route = request notes data by id
router.get('/notes/:id', (req, res) => {
    
}

)

// route = post new note

// route = delete note



module.exports = router;