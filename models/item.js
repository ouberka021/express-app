const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    qty: {type: String, required: true},
    desc: {type: String, required: true},
    brand: {type: String, required: true},
    
    size: {type: String, required: true},
    color: {type: String, required: true},
    img: {type: String, required: true}
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

// status: {type: String, required: true},