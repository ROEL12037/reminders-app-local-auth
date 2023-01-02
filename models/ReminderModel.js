const mongoose = require('mongoose')

const ReminderSchema = new mongoose.Schema({
  reminder: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Reminder', ReminderSchema)
