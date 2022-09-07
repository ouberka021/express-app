const express = require('express');
const router = express.Router();
const Item = require('../models/item.js');

// Remember INDUCES
// Index
router.get('/', (req, res) => {
    Item.find({}, (err, foundItem) => {
        res.json(foundItem);
    });
});

// New - Will be handled by React application
// Delete
router.delete('/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id, (err, deletedItem) => {
        res.json(deletedItem);
    });
});

// Update
router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedItem) => {
        res.json(updatedItem);
    });
});

// Create
router.post('/', (req, res) => {
    Item.create(req.body, (err, createdItem) => {
        res.json(createdItem); //.json() will send proper headers in response so client knows it's json coming back
    });
});
// Show
router.get('/:id', (req, res)=>{
    Item.findById(req.params.id, (err, foundItem)=>{
        res.json(foundItem);
    });
});
// Edit - Will be handled by React application
// Show

module.exports = router;