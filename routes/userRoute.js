
const router = require('express').Router();
const userControllers = require('../controllers/userControllers');

router.post("/",userControllers.createUser);

router.get('/', userControllers.getAllUsers);

router.get('/:id', userControllers.getUserById);

router.put('/:id', userControllers.updateUserById);

router.delete('/:id', userControllers.deleteUserById);

module.exports = router;