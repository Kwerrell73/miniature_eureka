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
    const result = notes.filter(newNote => newNote.id === id)[0];
    return result;
}

function deleteByID (id, notes) {
    const deletedNote = notes.filter(newNote => newNote.id === id)[0];

    const indexOfNote = notes.indexOf(toBeDeleted);

    notes.splice(indexResult, 1);
    
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
    deleteByID
  };