const router = require('express').Router();
const fs = require('fs');
const { addNote, validateNote, findById, deleteNoteByID } = require('../../lib/notes');
const { notes } = require('../../db/db');

const shortid = require('shortid');

// Routes outlined below 

// route = requesting notes data

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// route = request notes data by id
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
});


// route = post new note
router.post('/notes', (req, res) => {
   
    req.body.id = shortid.generate();
   
    if(!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
       const note = addNote(req.body, notes);
       res.json(note);
    }
});
// route = delete note
router.delete('/notes/:id', (req, res) => {
  const noteData = JSON.parse(fs.readFileSync('db/db.json'), 'utf8');  
  const uniqueNoteId = req.params.id;
    const noteExists = findById(uniqueNoteId, notes);
    if (noteExists) {
      const newNotes = deleteNoteByID(uniqueNoteId, notes);
      res.json(newNotes);
    } 
    else {
      res.send(404);
    }
})


module.exports = router;