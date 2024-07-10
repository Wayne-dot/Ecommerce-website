const express = require('express');
const {
    makeUser,
    LoginUser,
} = require('../controllers/UserController')



const router = express.Router();



router.post('/signup', makeUser);

router.post('/login', LoginUser);


module.exports = router