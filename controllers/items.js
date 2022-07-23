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
        res.render('./items/index.ejs', {
            allItems
        });
    });
});

//New Route
router.get('/items/new', (req, res) => {
    res.render('./items/new.ejs')
});

//Delete Route
router.delete('/items/:id' , (req,res) => {
    Item.findByIdAndRemove(req.params.id, (err, data) => {
          res.redirect('/items')
    });
});

//Update Route
router.put('/items/:id', (req,res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, (err, updatedItem) => {
        res.redirect('/items');
    });
});

//Create Route
router.post('/items' , (req,res) => {
    Item.create(req.body, (err, createdItem) => {
        res.redirect('/items')
    });
  });

//Edit Route
router.get('/items/:id/edit' , (req,res) => {
    Item.findById(req.params.id, (err, foundItem)=> {
          res.render('./items/edit.ejs' , {
              foundItem
          });
      });
  });

//Show Route
router.get("/items/:id", (req,res) => {
    Item.findById(req.params.id, (err, foundItem) => {
        res.render('./items/show.ejs', {
            foundItem
        });
    });
});

//Export Router Object
module.exports = router;