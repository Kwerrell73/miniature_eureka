const fs = require('fs')
const path = require('path');

// create functions for addNote, validateNote, findById, deleteByID

function addNote(body, notes) {
    const newNote = body;
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes }, null, 2)

    );
    return newNote;

}



module.exports = {
    addNote,
    validateNote,
    findById,
    deleteByID
  };