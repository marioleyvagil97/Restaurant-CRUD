const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');

router.get('/',orderController.getOrders);
router.post('/',orderController.createOrder);
router.get('/:id',orderController.getOrder);
router.put('/:id',orderController.updateOrder);
router.delete('/:id',orderController.deleteOrder);

module.exports = router;