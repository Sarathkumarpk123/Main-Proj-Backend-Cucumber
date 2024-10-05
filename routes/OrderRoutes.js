const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { getAllOrder, getOrderById, postOrder, updateOrder, deleteOrder } = require('../controllers/orderControllers');

router.get('/', getAllOrder);

router.get('/:orderId', getOrderById);




router.post('/', postOrder);

router.patch('/:orderId', updateOrder);  // Fixed this line

router.delete('/:orderId', deleteOrder);

 
module.exports = router;  
 