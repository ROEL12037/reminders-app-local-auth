const express = require('express')
const router = express.Router()
const { getReminders, createReminder, markComplete, markIncomplete, deleteReminder} = require('../controllers/remindersController') 
const { ensureAuth } = require('../middleware/auth')

// @desc    get reminders page
// @route   GET /reminders
router.get('/', ensureAuth, getReminders)

// @desc    create reminder
// @route   POST /reminders/createReminder
router.post('/createReminder', createReminder)

// @desc    update reminder
// @route   PUT /reminders/markComplete
router.put('/markComplete', markComplete)

// @desc    update reminder
// @route   PUT /reminders/markIncomplete
router.put('/markIncomplete', markIncomplete)

// @desc    delete reminder
// @route   DELETE /reminders/deleteReminder
router.delete('/deleteReminder', deleteReminder)

module.exports = router