var express = require('express');
var router = express.Router();


var validate = require('../validate/user.validate.js');
var controller = require('../controller/auth.controller.js');


router.get('/login', controller.getLogin);
router.post('/login', validate.postLogin, controller.postLogin);
router.get('/logout', controller.getLogout);

module.exports = router;