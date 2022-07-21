//Dependencies
require('dotenv').config();
const express = require('express');
//const expressLayouts = require ('express-ejs-layouts');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const morgan = require('morgan');
const itemsRouter = require('./controllers/items');

//Initialize Express App
const app = express();
const PORT = process.env.PORT;

//Configure App Settings
const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
});

//Mount Middleware
app.use(express.urlencoded({ extended: false })); //body-parser
app.use(express.static('public')); // Makes assets in public folder available to the application.
//app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(methodOverride('_method')); // Allow us to use app.put and app.delete
app.use(morgan('dev'));

//Mount Routes
app.get('/', (req, res) => {
    res.send('<h1>Hola</h1>')
    //res.redirect('/items')
});

app.use('/', itemsRouter);

//Listen on PORT
app.listen(PORT, () => {
    console.log(`Express is listening for request on port: ${PORT}`)
});

