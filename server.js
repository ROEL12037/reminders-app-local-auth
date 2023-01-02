const dotenv = require('dotenv').config({path: './config/.env'})

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
// const logger = require('morgan')

const connectDB = require('./config/database')

const homeRoutes = require('./routes/homeRoutes')
const loginRoutes = require('./routes/loginRoutes')
const logoutRoutes  = require('./routes/logoutRoutes')
const signupRoutes = require('./routes/signupRoutes')
const remindersRoutes = require('./routes/remindersRoutes')

require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(logger('dev'))
app.use(flash())
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ client: mongoose.connection.getClient() }),
    })
)
app.use(passport.initialize())
app.use(passport.session())
  
app.use('/', homeRoutes)
app.use('/login', loginRoutes)
app.use('/logout', logoutRoutes)
app.use('/signup', signupRoutes)
app.use('/reminders', remindersRoutes)
 
app.listen(process.env.PORT, ()=>{})    