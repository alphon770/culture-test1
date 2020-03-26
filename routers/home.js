const express = require('express');
const router = express.Router();
const auth = require('../middlewars/auth')

router.get('/' ,auth ,  (req,res)=>{
	res.render('index.ejs', {id: req.session.userId})
})

module.exports = router;
