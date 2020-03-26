const express = require('express');
const app = express();
app.listen(process.env.PORT || 3000 , ()=>{
  console.log('im listenning ^^')
})




const ejs = require('ejs')
const bodyParser = require('body-parser');
const session = require('express-session')

require('dotenv').config()

const home = require('./routers/home.js')
const login = require('./routers/login.js')
const register = require('./routers/register.js')
const test = require('./routers/test.js')
const resultat = require('./routers/result.js')
app.use(session({
  secret: 'brgbtrbbbb',
  expires : new Date(Date.now() + 3600000), //1 Hour
  resave: false,
  saveUninitialized: false,
  cookie: {
  secure: false,
  maxAge: 6000000 }

}))

app.use(bodyParser())



app.use('/' , home)
app.use('/login' , login)
app.use('/register' , register)
app.use('/test' , test )
app.use('/result' , resultat)

app.get('/logout' , (req,res)=>{
	req.session.destroy()
	res.redirect('/login')
})

