var db = require('../db');
const shortid = require('shortid');
var Cate = require('../model/cate.model');

module.exports.index = async function (req, res) {
	var products = await Cate.find();
  	res.render('cate', { category: products });
}
module.exports.search = async function(req, res) {
	var product = req.query.product;
	var searchProduct = await Cate.find({'name': {'$regex': product }});
	res.render('cate', { 
		category : searchProduct,
		value : product
	});
}
module.exports.getAddItem = function(req, res) {
	res.render('cate/add-item');
}
module.exports.postAddItem = function(req, res) {
	req.body.id = shortid.generate();
	var upload = "uploads/";
	req.body.img = upload + req.file.filename;
	db.get('category').push(req.body).write();
	res.redirect('/cate');
}
module.exports.view = function(req, res) {
	let id = req.params.id;
	var itemFind = db.get('category').find({ id: id }).value();
	res.render('cate/view', { categoryFind: itemFind });
}
module.exports.delete = function(req, res) {
	let id = req.params.id;
	let arr = db.get('category').value();
	for(let i = 0; i < arr.length; i++) {
		if(arr[i].id == id)
		{
			var index = i;
		}
	}
	db.get('category').splice(index, 1).write();
	res.redirect('/cate');
}