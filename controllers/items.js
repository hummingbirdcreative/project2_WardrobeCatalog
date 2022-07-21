//Import Dependencies
//Import Models
const Item = require('../models/item');

//Initialize router object & express
const router = require('express').Router();

//Define Routes
//INDUCES
//Index Route
router.get('/items', (req, res) => {
    Item.find({}, (err, allItems) => {
        res.render('index.ejs', {
            allItems
        });
    });
});

//New Route
router.get('/items/new', (req, res) => {
    res.render('new.ejs')
});

//Delete Route
//Update Route
//Create Route
router.post('/items' , (req,res) => {
    Item.create(req.body, (err, createdItem) => {
        res.redirect('/items')
    });
  });

//Edit Route
//Show Route
router.get("/items/:id", (req,res) => {
    Item.findById(req.params.id, (err, foundItem) => {
        res.render('show.ejs', {
            foundItem
        });
    });
});

//Export Router Object
module.exports = router;