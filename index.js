const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const productsRouter = reqire('./routes/admin/routes/products');

//app is an object that describes all the different things that our web server can do
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieSession({
    keys: ['woaspoidjkly']
}));
app.use(authRouter);
app.use(productsRouter);

app.listen(3000, () => {
    console.log('Listening');
});

