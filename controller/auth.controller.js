var db = require('../db');

module.exports.getLogin = function(req, res) {
	res.render('auth/login');
}

module.exports.postLogin = function(req, res) {
	var email = req.body.email;
	var userLogin = db.get('users').find({ email: email }).value();
	res.cookie('userId', userLogin.id, {
		signed: true
	});
	res.redirect('/cate');
}

module.exports.getLogout = function(req, res) {
	res.clearCookie('userId');
	res.render('auth/login');
}