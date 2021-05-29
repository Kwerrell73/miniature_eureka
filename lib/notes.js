const fs = require('fs')
const path = require('path');


// create functions for addNote, validateNote, findById, deleteNoteByID

function addNote(body, notes) {
    const newNote = body;
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes }, null, 2)

    );
    return newNote;

}

function validateNote(newNote){
    if(!newNote.title || typeof newNote.title !== 'string') {
        return false;
    }
    if(!newNote.text || typeof newNote.text !== 'string') {
        return false;
    }
    return true;
}

function findById (id, notes) {
    const noteID = notes.filter(newNote => newNote.id === id)[0];
    return noteID;
}

function deleteNoteByID (id, notes) {
    const deleteNote = notes.filter(newNote => newNote.id === id)[0];

    const noteIndex = notes.indexOf(deleteNote);

    notes.splice(notes, 1);
    
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    )
 
    return notes;
}



module.exports = {
    addNote,
    validateNote,
    findById,
    deleteNoteByID
  };