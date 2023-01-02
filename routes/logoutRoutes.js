const express = require('express')
const router = express.Router()
const { logout } = require('../controllers/logoutController') 

// @desc    get logout attempt
// @route   GET /logout
router.get('/', logout)

module.exports = router