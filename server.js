const express = require('express');
const fs = require('fs');
const path = require('path')

const { notes } = require('./db/db');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Express app setup
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware and apps to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);




//Set up listener at bottom of file

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}. To exit, Press CTRL C.`)
});