var express = require('express');
var app = express();


var port = process.env.PORT || 8700,
    Task = require('./model'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./route');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
  
app.listen(port);
  
console.log('accessment server started on: ' + port);