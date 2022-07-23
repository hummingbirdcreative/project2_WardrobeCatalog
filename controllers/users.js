const usersRouter = require('express').Router();
const User = require('../models/user');
const Item = require('../models/item');

const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

module.exports = usersRouter;