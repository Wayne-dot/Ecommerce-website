require('dotenv').config();

const User = require('../models/UserModel');
const mongoose = require('mongoose');
const {json} = require('express');
const jwt = require('jsonwebtoken');


const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRETE, {expiresIn: '3d'})
}

const LoginUser = async(req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.Login(email, password) 

        // create a token
        const token = createToken(user._id)
        res.status(200).json({email, token});
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}


// Make a new user
const makeUser = async(req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.signup(email, password) 

        // create a token
        const token = createToken(user._id)
        res.status(200).json({email, token});
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    makeUser,
    LoginUser,
}