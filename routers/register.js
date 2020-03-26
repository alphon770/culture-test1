const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');


router.get('/' , (req,res)=>{
	res.render('register.ejs' , {id: ""})
})

router.post('/' , (req,res)=>{
	const email = req.body.email;
	const mdp = req.body.mdp;

    const date = Date.now();

    const math = Math.floor(Math.random() * 2);
    const r = /\w+/g;

    const rEmail = /\w+\@\w+/;
    const match = email.match(rEmail)

    if(!match) {
    	return res.send('this email is invalid sorry')
    }


    const result = email.match(r)

    const userId = date + result[math]

    db.serialize(function(){
    	db.run("CREATE TABLE IF NOT EXISTS user (id, email , password )")
    	db.run("INSERT INTO user (id, email, password) VALUES ($id, $email, $password)" , {
    		$id: userId ,
    		$email: email,
    		$password: mdp
    	}, function(err){
    		if(err) {console.log(err)}
    		req.session.userId = userId
    	    console.log(req.session.userId)
    	    res.redirect('/')

    	})

    })

})



 router.get('/db' , (req,res)=>{
 	db.all("SELECT*FROM user" ,(err,row)=>{
 		console.log(row)
 		res.send(row)
 	})
 })

module.exports = router;
