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
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(err, 404);
    }
});


// route = post new note
router.post('/notes', (req, res) => {
   
    req.body.id = shortid.generate();
   
    if(!validateNote(req.body)) {
        res.status(err, 400).send('The note is not properly formatted.');
    } else {
       const note = addNote(req.body, notes);
       res.json(note);
    }
});
// route = delete note



module.exports = router;