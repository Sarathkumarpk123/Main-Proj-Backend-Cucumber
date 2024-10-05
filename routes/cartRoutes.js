const express = require('express');
const router = express.Router();

const { getAllCart, getCartById, postCart, updateCart, deleteCart } = require('../controllers/cartControllers');

// Apply verifyToken to secure cart routes
router.get('/',  getAllCart);
router.get('/:cartId',  getCartById);
router.post('/', postCart);
router.patch('/:cartId',  updateCart);
router.delete('/:cartId',  deleteCart);

module.exports = router;
    