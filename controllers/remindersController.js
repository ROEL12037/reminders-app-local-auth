const Reminder = require('../models/ReminderModel')

// @desc    get reminders page
// @route   GET /reminders
const getReminders = async (req,res)=>{
    try{
        const reminderItems = await Reminder.find({userId:req.user.id})
        const remindersLeft = await Reminder.countDocuments({userId:req.user.id,completed: false})
        res.render('reminders', {title: 'reminders', reminders: reminderItems, left: remindersLeft, user: req.user})
    }catch(err){
        console.log(err)
    }
}

// @desc    create reminder
// @route   POST /reminders/createReminder
const createReminder = async (req, res)=>{
    try{
        await Reminder.create({reminder: req.body.reminderItem, completed: false, userId: req.user.id})
        res.redirect('/reminders')
    }catch(err){
        console.log(err)
    }
}

// @desc    update reminder
// @route   PUT /reminders/markComplete
const markComplete = async (req, res)=>{
    try{
        await Reminder.findOneAndUpdate({_id:req.body.reminderIdFromJSFile},{
            completed: true
        })
        res.json('Marked Complete')
    }catch(err){
        console.log(err)
    }
}

// @desc    update reminder
// @route   PUT /reminders/markIncomplete
const markIncomplete = async (req, res)=>{
    try{
        await Reminder.findOneAndUpdate({_id:req.body.reminderIdFromJSFile},{
            completed: false
        })
        res.json('Marked Incomplete')
    }catch(err){
        console.log(err)
    }
}

// @desc    delete reminder
// @route   DELETE /reminders/deleteReminder
const deleteReminder = async (req, res)=>{
    try{
        await Reminder.findOneAndDelete({_id:req.body.reminderIdFromJSFile})
        res.json('Deleted Reminder')
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    getReminders, 
    createReminder, 
    markComplete,
    markIncomplete,
    deleteReminder
}