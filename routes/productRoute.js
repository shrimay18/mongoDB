const router = require('express').Router();
const productControllers = require('../controllers/productControllers');

router.post("/",productControllers.createProduct);

router.get('/', productControllers.getAllProducts);

router.get('/:id', productControllers.getById);

router.put('/:id', productControllers.updateById);

router.delete('/:id', productControllers.deleteById);

module.exports = router;
