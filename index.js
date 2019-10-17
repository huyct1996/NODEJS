//require từ bên ngoài
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var authRouter = require('./router/auth.router')
var cateRouter = require('./router/cate.router');
var cartRouter = require('./router/cart.router');
var apiRouter = require('./api/router/api.router');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/express-demo');

var authMiddlewares = require('./middlewares/auth.middlewares');
var cartMiddleware = require('./middlewares/cart.middleware');

//require từ trong thư mục
const port = 3000;
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(cookieParser('xdsdadadadada'))

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.use('/cate', authMiddlewares.authMiddle , cateRouter);
app.use('/auth', authRouter);
app.use('/cart', cartMiddleware.addToCart, cartRouter);
app.use('/api', apiRouter);
app.listen(port, () => console.log('Example app listening on port ${port}!'))