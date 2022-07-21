//Mongoose Schema/Model
const mongoose = require('mongoose');

//const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        brand: String,
        type: String, 
        description: String,
        img: String,
        notes: String
    }
)

module.exports = mongoose.model('Item', itemSchema)
