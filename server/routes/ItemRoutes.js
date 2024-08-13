const express = require('express');
const requireAuth = require('../middleware/requireAuth')
const {
    getItems,
    makeItem,
    getOneItem,
} = require('../controllers/ItemsController');



const router = express.Router();

// required Auth for all Item routes
router.use(requireAuth)

router.get('/', getItems);

router.get('/:id', getOneItem);

router.post('/', makeItem)


module.exports = router