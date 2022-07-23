//Import Dependencies
//Import Models
const Item = require('../models/item');
const User = require('../models/user');

//Initialize router object & express
const router = require('express').Router();

//User router middleware
router.use(function (req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/users/login');
    };
});

//Define Routes
//INDUCES
//Index Route
router.get('/', (req, res) => {
    Item.find({}, (err, allItems) => {
        res.render('./items/index.ejs', {
            allItems, 
            user: req.session.user
        });
    });
});

// filtered index route - list all items by user
router.get('/filtered', (req, res) => {
    User.findById(req.session.user, (error, user) => {
        Log.find({ user: req.session.user }, (error, items) => {
            res.render('./items/index.ejs', { 
                allItems, 
                name: `${user.name}` 
            });
        });
    });
});

//New Route
router.get('/new', (req, res) => {
    res.render('./items/new.ejs')
});

//Delete Route
router.delete('/:id' , (req,res) => {
    Item.findByIdAndRemove(req.params.id, (err, data) => {
          res.redirect('/items')
    });
});

//Update Route
router.put('/:id', (req,res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, (err, updatedItem) => {
        res.redirect('/items');
    });
});

//Create Route
router.post('/' , (req,res) => {
    Item.create(req.body, (err, createdItem) => {
        res.redirect('/items')
    });
  });

//Edit Route
router.get('/:id/edit' , (req,res) => {
    Item.findById(req.params.id, (err, foundItem)=> {
          res.render('./items/edit.ejs' , {
              foundItem
          });
      });
  });

//Show Route
router.get("/:id", (req,res) => {
    Item.findById(req.params.id, (err, foundItem) => {
        res.render('./items/show.ejs', {
            foundItem,
            user: req.session.user
        });
    });
});

//Export Router Object
module.exports = router;