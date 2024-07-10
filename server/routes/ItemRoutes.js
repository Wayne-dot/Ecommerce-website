const express = require('express');
const requireAuth = require('../middleware/requireAuth')
const {
    getItems,
    makeItem,
} = require('../controllers/ItemsController');



const router = express.Router();

// required Auth for all Item routes
router.use(requireAuth)

router.get('/', getItems);

router.post('/', makeItem)


module.exports = router