var express = require('express');
var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

describe('Fibonacci application', function() {
	var app;


	// timeout for tests
	this.timeout(10000);


	// called once before any tests begin
	before (function(done) {
		app = express();
		port = process.env.PORT || 3000;

		// register routes here
		var routes = require('../api/routes/fibonacciRoutes'); //importing route
		routes(app); //register the route
		app.listen(port, function(err) {
			if (err) {
				return done(err);
			}
			done();
		});
	});

	// called after all tests are complete
	after(function() {
		console.log("Application tests are done!!");
	});

	it('should detect invalid input', function() {
		request(app)
			.get('/fibonacci/garbage')
			.set('Content-type', 'text')
			.expect('Content-type', /text/)
			.expect(200, function(err, res) {
				if (err) {
					return done(err);
				}
				expect(res.text).to.contain('is not an integer');
			})
		});

	it('should detect a negative number', function() {
		request(app)
			.get('/fibonacci/-1')
			.set('Content-type', 'text')
			.expect('Content-type', /text/)
			.expect(200, function(err, res) {
				if (err) {
					return done(err);
				}
				expect(res.text).to.contain('is not a positive integer');
			})
		});

	it('should detect an empty set', function() {
		request(app)
			.get('/fibonacci/0')
			.set('Content-type', 'text')
			.expect('Content-type', /text/)
			.expect(200, function(err, res) {
				if (err) {
					return done(err);
				}
				expect(res.text).to.equal('[]');
			})
		});

	it('should detect a simple result', function() {
		request(app)
			.get('/fibonacci/1')
			.set('Content-type', 'text')
			.expect('Content-type', /text/)
			.expect(200, function(err, res) {
				if (err) {
					return done(err);
				}
				expect(res.text).to.exist;
			})
		});

	it('should detect the length of numbers in result', function() {
		request(app)
			.get('/fibonacci/100')
			.set('Content-type', 'text')
			.expect('Content-type', /text/)
			.expect(200, function(err, res) {
				if (err) {
					return done(err);
				}
				expect(res.text).to.exist;
				var nums = createNums(res.text);
				expect(nums.length).to.equal(100);
			})
		});

	it('should detect the sum fib(10) should be 88', function() {
		request(app)
			.get('/fibonacci/10')
			.set('Content-type', 'text')
			.expect('Content-type', /text/)
			.expect(200, function(err, res) {
				if (err) {
					return done(err);
				}
				expect(res.text).to.exist;
				var nums = createNums(res.text);
				var sum = 0;
				for (var i = 0; i < nums.length; i++) {
					sum += parseInt(nums[i]);
				}
				expect(sum).to.equal(88);
			})
		});


	it('should detect the sum fib(100) should be 573147844013817200000', function() {
		request(app)
			.get('/fibonacci/100')
			.set('Content-type', 'text')
			.expect('Content-type', /text/)
			.expect(200, function(err, res) {
				if (err) {
					return done(err);
				}
				expect(res.text).to.exist;
				var nums = createNums(res.text);
				var sum = 0;
				for (var i = 0; i < nums.length; i++) {
					sum += parseInt(nums[i]);
				}
				expect(sum).to.equal(573147844013817200000);
			})
		});

});


// helper function to strip off [], and to split string into array of nums
function createNums(res)
{
	var str = res.substring(1, res.length - 1);		// trim off []
	var nums = str.split(' ');
	return nums;
}