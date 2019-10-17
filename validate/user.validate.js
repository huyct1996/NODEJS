var db = require('../db.js');
module.exports.postLogin = function(req, res, next) {
	var email = req.body.email;
	var password = req.body.password;
	var userLogin = db.get('users').find({ email: email }).value();
	if(!userLogin) {
		res.render('auth/login', {
			errors: ['User does not exist.'],
			values: req.body
		});
		return;
	}
	if(userLogin.password != password) {
		res.render('auth/login', {
			errors: ['Wrong password.'],
			values: req.body
		});
		return;
	}
	next();
}