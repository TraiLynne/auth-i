const express = require('express');

const router = express.Router();

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes)

router.use('/', (req, res) => res.send('Welcome to the main API'));

module.exports = router;