const express = require('express')
const router = express.Router()
const {getSignup, postSignup} = require('../controllers/signupController') 

// @desc    get signup page
// @route   GET /signup
router.get('/', getSignup)

// @desc    post signup attempt
// @route   POST /signup
router.post('/', postSignup)

module.exports = router