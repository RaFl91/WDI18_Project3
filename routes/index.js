var express = require('express')
var router = express.Router()
const userController = require('../controllers/userController')
const characterController = require('../controllers/characterController')



// ===== USER ROUTES =====
router.get('/api/users', userController.index)
router.post('/api/users/', userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)

//  ===== CHARACTER ROUTES =====
router.get('/api/users/:userId/characters', characterController.index)
router.get('/api/character/:characterId', characterController.show)
router.delete('/api/characters/:characterId', characterController.delete)
router.patch('/api/characters/:characterId', characterController.update)
router.post('/api/users/:userId/characters', characterController.create)
