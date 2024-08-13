const express = require('express');

const {
    getSchema
} = require('../controllers/SchemaController');

const router = express.Router();

router.get('/', getSchema);


module.exports = router