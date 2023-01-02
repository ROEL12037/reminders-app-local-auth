const express = require('express')
const router = express.Router()
const {getLogin, postLogin} = require('../controllers/loginController') 

// @desc    get login page
// @route   GET /login
router.get('/', getLogin)

// @desc    post login attempt
// @route   POST /login
router.post('/', postLogin)

module.exports = router