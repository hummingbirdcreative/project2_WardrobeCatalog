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

module.exports = usersRouter;