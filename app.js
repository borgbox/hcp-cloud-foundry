const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
})

app.get('/env', function (req, res) {
    res.contentType('application/json');
    res.send(process.env);
})

app.get('/env/:param/', function (req, res) {
    res.contentType('application/json');
    res.send(process.env[req.params.param]);
})

app.listen(PORT, function () {
    console.log('NodeJS HelloWorld app listening to port ...' + PORT);
})