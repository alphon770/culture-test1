const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

router.get('/' , (req,res)=>{
	res.render('login.ejs' , {id:""})
})

router.post('/' , (req,res)=>{
	const userEmail = req.body.userEmail
	const userMdp = req.body.userMdp;



db.serialize(function(){
	db.get("SELECT id, email, password FROM user WHERE email=?", [userEmail] , (err,row)=>{
		console.log(row)
		if(!row) {
			return res.send('this email doest not exist')
		}else if(userMdp !== row.password) {
			return res.send('Password incorrect!!')
		}
		req.session.userId = row.id
		setTimeout(()=>{ res.redirect('/')} , 200)
	})


})
})
module.exports = router;
