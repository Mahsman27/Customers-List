const express = require('express');
const bodyParser = require('body-parser');

//create the express app starting point
const app = express();

//port to connect to
const port = process.env.port || 5000;

//parse url encoded requests
app.use(bodyParser.urlencoded({ extended : true}))

//parse JSON requests
app.use(bodyParser.json())

//initialize home route --> localhost:5000/home
app.get('/home', (req, res) => {
    res.send("This is the way.");
});

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});


