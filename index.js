const express = require('express');
const bodyParser = require('body-parser');
const usersRepo = require('./repositories/users');

//app is an object that describes all the different things that our web server can do
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
//route handler
app.get('/', (req, res) => {
    res.send(`
        <div>
            <form method="POST">
                <input placeholder="email" />
                <input placeholder="password" />
                <input placeholder="password confirmation" />
                <button>Sign Up</button>
            </form>
        </div>
        `);
});

app.post('/', async (req, res) => {
   const { email, password, passwordConfirmation } = req.body;

   const existingUser = await usersRepo.getOneBy({ email });
   if (existingUser) {
    return res.send('Email in use');
   }

   if (password !== passwordConfirmation) {
    return res.send('Passwords must match');
   }

    res.send('Account created!!!');
});

app.listen(3000, () => {
    console.log('Listening');
});

