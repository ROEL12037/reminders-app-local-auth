const passport = require('passport')
const validator = require('validator')

// @desc    get login page
// @route   GET /login
const getLogin = (req, res) => {
  if (req.user) {
    return res.redirect('/reminders')
  }
  res.render('login', {
    title: 'Login'
  })
}

// @desc    post login attempt
// @route   POST /login
const postLogin = (req, res, next) => {
  const validationErrors = []
  
  if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })

  if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: 'Password cannot be blank.' })

  if (validationErrors.length) {
    req.flash('errors', validationErrors)
    return res.redirect('/login')
  }

  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err) }
    if (!user) {
      req.flash('errors', info)
      return res.redirect('/login')
    }
    req.logIn(user, (err) => {
      if (err) { return next(err) }
      req.flash('success', { msg: 'Success! You are logged in.' })
      res.redirect(req.session.returnTo || '/reminders')
    })
  })(req, res, next)
}
  
module.exports = {
  getLogin,
  postLogin
}