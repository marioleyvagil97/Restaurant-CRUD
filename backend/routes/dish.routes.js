const express = require('express');
const router = express.Router();

const dishController = require('../controllers/dish.controller');

router.get('/',dishController.getDishes);
router.post('/',dishController.createDish);
router.get('/:id',dishController.getDish);
router.put('/:id',dishController.updateDish);
router.delete('/:id',dishController.deleteDish);

module.exports = router;