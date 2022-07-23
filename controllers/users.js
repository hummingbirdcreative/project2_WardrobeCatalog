const usersRouter = require('express').Router();
const User = require('../models/user');
const Item = require('../models/item');

const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

//Middleware

//Routes
// login GET route - renders login page
usersRouter.get('/login', (req, res) => {
    res.render('./users/login.ejs', { err: '' });
});

// login POST route - authenticate/login user
usersRouter.post('/login', (req, res) => {
    // step 1 - find the user in the database by their email/username
    User.findOne({ email: req.body.email }, '+password', (err, foundUser) => {
        // step 1.1 - if the user is not found, respond with a error saying that the user does not exist
        if (!foundUser) return res.render('./users/login.ejs', { err: `Account for ${req.body.email} doesn't exist` });
        // step 2 - assuming we've found user, now we compare passwords - plain text - password digest
        if (!bcrypt.compareSync(req.body.password, foundUser.password)) {
            // step 2.1 - if there is not match, respond with a error saying invalid credentials
            return res.render('./users/login.ejs', { err: 'Invalid credentials' });
        }
        // step 3 assuming there is a match, we create a session and redirect to dashboard
        req.session.user = foundUser._id
        res.redirect('/users/profile');
    })
});

module.exports = usersRouter;