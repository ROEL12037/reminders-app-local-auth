# Forget-Me-Not Reminders 
Sign up in with a username, email, and password to start creating reminders. The reminders can be deleted or marked as complete. You will also be able to see how many reminders are pending. 

**Live Demo:** [Forget-Me-Not][reminders-url]

**view of the reminders page once logged in:**
<img src="https://res.cloudinary.com/di2ps252x/image/upload/v1674923796/reminders-page_1_p2vzn0.png" alt="reminders page" width="400"/>

## How It's Made: 
### Tech used:
- HTML
- CSS
- JS
- Bootstrap
- Node.js
- bcrypt
- connect-mongo
- dotenv
- EJS
- Express.js
    - express-session
    - morgan (dev)
- express-flash
- MongoDB
- Mongoose ODM
- nodemon (dev)
- Passport.js
    - passport-local
- validator

Took advantage of Node.js and Express.js as well as the MVC file structure to create this reminder web app. 

## Future Optimizations
- ability to delete multiple reminders at once

## Lessons Learned:
- connect to mongodb using mongoose version 6.8.2

[reminders-url]: https://reminders-app-local-auth.onrender.com/