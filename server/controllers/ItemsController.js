
const {json} = require('express');
const Item = require('../models/ItemsModel');  
const mongoose = require('mongoose'); 

// get the model

// getItems, get all items
const getItems = async(req, res) => {
    const items = await Item.find({}).sort({createdAt: -1});
    res.status(200).json(items);
}

// Make a new item
const makeItem = async(req, res) => {
    const {name, price, description, stockQuantity, image} = req.body;
    try{
        const item = await Item.create({name, price, description, stockQuantity, image})
        res.status(200).json(item)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getItems,
    makeItem,
}