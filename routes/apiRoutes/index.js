const router = require('express').Router();
const noteTakerRoutes = require('./noteTakerRoutes');

router.use(noteTakerRoutes);


module.exports = router;