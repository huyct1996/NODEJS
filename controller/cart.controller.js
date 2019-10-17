var db = require('../db');
module.exports.addToCart = function(req, res, next) {
	var productId = req.params.product;
	var sessionId = req.signedCookies.sessionId;
	if(!sessionId) {
		res.redirect('/cate');
		return;
	}

	var count = db.get('cart')
		.find({ id: sessionId })
		.get('product.' + productId, 0)
		.value();

	db.get('cart')
		.find({ id: sessionId })
		.set('product.'+ productId, count + 1)
		.write();

	res.redirect('/cate');
}