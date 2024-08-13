
const {json} = require('express');
const Item = require('../models/ItemsModel');  
const mongoose = require('mongoose'); 
const { options } = require('../routes/ItemRoutes');

// get the model

// getItems, get all items
const getItems = async(req, res) => {
    const items = await Item.find({}).sort({createdAt: -1});
    res.status(200).json(items);
}

// get One Item
const getOneItem = async(req, res) => {
    
    try{
        const {id} = req.params
        // options=ItemOptions
        const item = await Item.findById(id)
        if(item){
            res.status(200).json(item)
        }
    }
    catch(error){
        res.status(400).json({error: error.message})
    }


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
    getOneItem,
}