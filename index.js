const express = require('express');
const bodyParser = require('body-parser');

//app is an object that describes all the different things that our web server can do
const app = express();
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

app.post('/', bodyParser.urlencoded({ extended: true}),(req, res) => {
   console.log(req.body);
    res.send('Account created!!!');
});

app.listen(3000, () => {
    console.log('Listening');
});

