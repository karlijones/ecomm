const express = require('express');

//app is an object that describes all the different things that our web server can do
const app = express();
//route handler
app.get('/', (req, res) => {
    res.send('hi there!');
});

app.listen(3000, () => {
    console.log('Listening');
});

