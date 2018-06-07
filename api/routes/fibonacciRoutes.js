'use strict';
module.exports = function (app) {

	// process GET fibonacci with the fibonacci Controller
	var fibonacci = require('../controllers/fibonacciController');
	app.route('/fibonacci/:number').get(fibonacci.doFib);
	// TODO: add additional routes here

};