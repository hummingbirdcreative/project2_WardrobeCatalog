//Import Dependencies
//Import Models
const Item = require('../models/item');
const User = require('../models/user');

//Initialize router object & express
const router = require('express').Router();

//Router Middleware
router.use(function (req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/users/login');
    };
});

//Index route-list all items
//Do you want user homepage to just show user wardrobe items???
router.get('/', (req, res) => {
    Item.find({}, (err, items) => {
        res.render('./items/index.ejs', { 
            items, 
            name: '', 
            user: req.session.user 
        });
    });
});

//Filtered Index-only items from user
router.get('/filtered', (req, res) => {
    User.findById(req.session.user, (err, user) => {
        Item.find({ user: req.session.user }, (err, items) => {
            res.render('./items/index.ejs', { 
                items, 
                name: `${user.name}` 
            });
        });
    });
});

// //Favorites Index-only logs from user
// router.get('/favorites', (req, res) => {
//     User.findById(req.session.user, (err, user) => {
//         Item.find({ user: req.session.user }, (err, items) => {
//             res.render('./items/index.ejs', { 
//                 items,
//                 name: `${user.name}` 
//             });
//         });
//     });
// });


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
    req.body.user = req.session.user;
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