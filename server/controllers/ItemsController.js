
const {json} = require('express');
const Item = require('../models/ItemsModel');  
const mongoose = require('mongoose'); 

// get the model

// getItems, get all items
const getItems = async(req, res) => {
    const item = await Item.find({});
    res.status(200).json(item);
}

// Make a new item
const makeItem = async(req, res) => {
    const {name, price} = req.body;
    try{
        const item = await Item.create({name, price})
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