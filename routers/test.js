const express = require('express');
const router = express.Router();
const auth = require('../middlewars/auth')
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');


router.get('/' ,auth,  (req,res)=>{
	res.render('test.ejs' , {id: req.session.userId})
})

router.post('/' , (req,res)=>{
	const number = req.body.number; //four six
	const fete = req.body.fete  //travail femme
	const patates = req.body.patates //fruit legume
	const independance = req.body.independance//already notyet
	const music = req.body.music //korea china
	const pays = req.body.pays //inde chine
	const usa = req.body.usa //usa maroc
	const senegal = req.body.senegal //azi byad

    var score = 0;

    if(number == "four") {
    	score+=10
    }
    if(fete == "travail") {
    	score+=10
    }

    if(patates == "legume") {
    	score+=10
    }   
    if(independance == "notyet") {
    	score+=10
    }   
    if(music == "korea") {
    	score+=10
    }   
    if(pays == "chine") {
    	score+=10
    }   
    if(usa == "usa") {
    	score+=10
    }  
     if(senegal == "azi") {
    	score+=10
    }

    req.session.score = `${score}` 
	res.redirect('/result')
})


module.exports = router