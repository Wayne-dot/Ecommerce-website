const express = require('express');

const router = express.Router();

const {
    makeUser,
    LoginUser,
} = require('../controllers/UserController')


router.post('/signup', makeUser);

router.post('/login', LoginUser);

module.exports = router