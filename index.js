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
    req.on('data', data => {
        const parsed = data.toString('utf8').split('&');
        const formData = {};
        for (let pair of parsed) {
            const [key, value] = pair.split('=');
            formData[key] = value;
        }
        console.log(formData);
    });
    res.send('Account created!!!');
});

app.listen(3000, () => {
    console.log('Listening');
});

