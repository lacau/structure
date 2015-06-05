var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var _ = require('lodash');
var routes = require('./server/routes');

// DB connect
mongoose.connect('mongodb://localhost:27017/structure');

// Add parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Load routes
_.each(routes, function(controller, route) {
	app.get(route, controller.list);
});

app.get('/', function(res, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/views', express.static(__dirname + '/client/views'));
app.use('/images', express.static(__dirname + '/client/images'));

// Listen
app.listen(3000, function() {
	console.log('Listening on port 3000...');
});