var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

// register routes here
var routes = require('./api/routes/fibonacciRoutes'); //importing route
routes(app); //register the route

// open open and start listening
console.log("Fibonacci REST service listening on port " + port);
app.listen(port);

