const express = require('express')
const router = express.Router()
const { getIndex } = require('../controllers/homeController')

router.get('/', getIndex)
// router.get('/login', authController.getLogin)
// router.post('/login', authController.postLogin)
// router.get('/logout', authController.logout)
// router.get('/signup', authController.getSignup)
// router.post('/signup', authController.postSignup)

module.exports = router