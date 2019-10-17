module.exports.postAddItem = function(req, res, next) {
	var errors = [];
	if(!req.body.name) {
		errors.push("Name is required.");
	}
	if(!req.body.price) {
		errors.push("Price is reuired.")
	}
	if(errors.length) {
		res.render('cate/add-item', {
			errors: errors,
			values: req.body
		});
		return;
	}
	next();
}