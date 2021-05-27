const express = require('express');
const fs = require('fs');
const path = require('path')
const { notes } = require('./db/db');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));


//Set up listener at bottom of file

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}. Press CTRL C to exit.`)
});