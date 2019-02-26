const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db/helpers/userModel');
const internalErrorMessage = 'Houston, we have a problem'

const router = express.Router();

router.use(express.json());

router.post('/register', async (req, res) => {
    let registration = req.body;

    try {
        if (!registration.name || registration.name === '') {
            res
                .status(400)
                .json('Please provide a valid name')
        } else if (!registration.username || registration.username === '') {
            res
                .status(400)
                .json('Please provide a valid username')
        } else if (!registration.password || registration.password === '' || registration.password.length > 12) {
            res
                .status(400)
                .json('Please provide a valid password over 12 characters long')
        } else {
            const hash = bcrypt.hashSync(registration.password, 14);
    
            registration.password = hash;
    
            let newUser = await db.add(registration);
    
            res
                .status(201)
                .json(newUser);
        }
    } catch (err) {
        res
            .status(500)
            .json({
                internalErrorMessage
            })
    }
})

router.post('/login', async (req, res) => {
    let { username, password } = req.body;

    try {
        let user = db.findBy({username});

        if (user && bcrypt.compareSync(password, user.password)){
            res
                .status(201)
                .send('Logged In')
        } else {
            res
                .status(201)
                .json('Invalid Credentials')
        }
    } catch (err) {
        res
            .status(500)
            .json({
                internalErrorMessage
            })
    }
})

router.get('/users')

router.use('/', (req, res) => res.send('Welcome to the User API'));

module.exports = router;