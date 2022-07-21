//Import Dependencies
//Import Models
const Item = require('../models/item');

//Initialize router object & express
const router = require('express').Router();

//Define Routes
//INDUCES
//Index Route
// router.get('/', (req, res) => {
//     Item.find({}, (error, logs) => {
//         res.render('/index.ejs', {
//             allItems
//         });
//     });
// });

//New Route
router.get('/items/new', (req, res) => {
    res.render('new.ejs')
});

//Delete Route
//Update Route
//Create Route
router.post('/items' , (req,res) => {
    Item.create(req.body, (err, createdLog) => {
        res.redirect('/items')
    });
  });
  
//Edit Route
//Show Route

//Export Router Object
module.exports = router;