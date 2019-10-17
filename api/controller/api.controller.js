var Cate = require('../../model/cate.model');

module.exports.index = async function (req, res) {
	var products = await Cate.find();
  	res.json(products);
};