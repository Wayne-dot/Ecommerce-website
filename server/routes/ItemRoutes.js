const express = require('express');

const router = express.Router();

const {
    getItems,
    makeItem,
} = require('../controllers/ItemsController');

router.get('/', getItems);

router.post('/', makeItem)


module.exports = router