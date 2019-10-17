var express = require('express');
var router = express.Router();

var controller = require('../controller/cart.controller.js');

router.get('/:product', controller.addToCart);
module.exports = router;