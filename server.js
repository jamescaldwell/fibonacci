/****
This is the REST Service for fibonacci using express as the engine
If additional routes are needed, add them to api/routes/fibonacciRoutes.js
******/

var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

// register routes here
var routes = require('./api/routes/fibonacciRoutes'); //importing route
routes(app);		//register the route to the app

// set up data models HERE

// connect to database HERE

// open open and start listening
console.log("Fibonacci REST service listening on port " + port);
app.listen(port);

