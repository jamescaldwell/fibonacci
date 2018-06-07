'use strict';
module.exports = function (app) {

	var fibonacci = require('../controllers/fibonacciController');
	app.route('/fibonacci/:number')
		.get(fibonacci.doFib);
};