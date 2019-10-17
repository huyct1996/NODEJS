var shortid = require('shortid')
var db = require('../db');
module.exports.addToCart = function(req, res, next) {
	if(!req.signedCookies.sessionId) {
		var sessionId = shortid.generate();
		res.cookie('sessionId', sessionId, {
			signed: true
		});

		db.get('cart').push({ 
			id: sessionId 
		}).write();
	}
	next();
}