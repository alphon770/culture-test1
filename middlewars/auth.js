const express= require('express');


module.exports = (req, res, next) => {
	const id = req.session.userId
    if(!id) {
    	return res.send("You are not authenfied, login or register first! <br> <a href='/login'>Login</a><br><a href='/register'>Register</a>")
    }

    next()
};