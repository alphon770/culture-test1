const express = require('express');
const router = express.Router();
const auth = require('../middlewars/auth')
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');



router.use('/' , (req,res,next)=>{
	if(!req.session.score){
		return res.send("You need to pass the test first <br> <a href='/test'>Pass the test now</a>")
	}
	next()
})

router.get('/' , (req,res)=>{
	res.render('result.ejs' , {id: req.session.userId , score: req.session.score})
})


module.exports = router