const passport = require('passport')
const validator = require('validator')
const User = require('../models/UserModel')

// @desc    get signup page
// @route   GET /signup
const getSignup = (req, res) => {
    if (req.user) {
        return res.redirect('/reminders')
    }
    res.render('signup', {
        title: 'Create Account'
    }) 
}

// @desc    post signup attempt
// @route   POST /signup
const postSignup = (req, res) => {
    const validationErrors = []
    if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
    if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' })
    if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })

    if (validationErrors.length) {
        req.flash('errors', validationErrors)
        return res.redirect('../signup')
    }

    req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })

    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    })

    User.findOne({$or: [
        {email: req.body.email},
        {userName: req.body.userName}
    ]}, (err, existingUser) => {
        if (err) { return next(err) }
        if (existingUser) {
            req.flash('errors', { msg: 'Account with that email address or username already exists.' })
            return res.redirect('../signup')
        }
        user.save((err) => {
            if (err) { return next(err) }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err)
                }
                res.redirect('/reminders')
            })
        })
    })
}

module.exports = {
    getSignup, 
    postSignup
}
