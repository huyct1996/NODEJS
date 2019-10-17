var express = require('express');
var router = express.Router();
var multer  = require('multer')

var upload = multer({ dest: './public/uploads/' })

// var authMiddlewares = require('../middlewares/auth.middlewares');
var validate = require('../validate/cate.validate.js');
var controller = require('../controller/cate.controller.js');

router.get('/', controller.index);
router.get('/cookie', function(req, res, next) {
	res.cookie('user-id', 12345);
	res.send('Hello');
});
//req.query lấy yêu cầu người dùng tìm kiếm được gửi trên URL
router.get('/search', controller.search);
//req.body lấy giá trị được gửi trong body
router.get('/add-item', controller.getAddItem);

router.post('/add-item', upload.single('img'), validate.postAddItem, controller.postAddItem);

router.get('/:id', controller.view);
router.get('/delete/:id', controller.delete);

module.exports = router;