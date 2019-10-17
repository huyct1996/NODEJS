var mongoose = require('mongoose');
var cateSchema = new mongoose.Schema({
	name: String,
	price: String,
	img: String,
});

var Cate = mongoose.model('Cate', cateSchema, 'category');

module.exports = Cate;