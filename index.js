const express = require('express');

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

app.post('/', (req, res) => {
    res.send('Account created!!!');
});

app.listen(3000, () => {
    console.log('Listening');
});

