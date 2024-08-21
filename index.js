const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const usersRepo = require('./repositories/users');

//app is an object that describes all the different things that our web server can do
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieSession({
    keys: ['woaspoidjkly']
}));

app.listen(3000, () => {
    console.log('Listening');
});

