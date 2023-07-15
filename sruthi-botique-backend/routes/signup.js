const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.post('/register',userController.createAccount)

module.exports = router