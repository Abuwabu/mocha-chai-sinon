/**
 * Express server app for Testing Mocha, Chai, and Sinon
 * Alongside Chai-as-Promised, and Sinon-as-Promised
 *
 * @author        Adam Tait
 * @summary       Express server app for testing Mocha, Chai, and Sinon
 *
 * @requires      express
 */



// NPM REQUIREMENTS
var express = require('express');


// GLOBAL VARIABLES
var app = express();
var exports = module.exports = {};

const PORT = 3000;


// GET /
app.get('/', function (req, res) {
  res.send('Hello World!');
});


// GET /about
app.get('/about', function (req, res) {
  res.send('About Us');
});



// LISTEN UP...
var server = app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT + '...');
});


// Export for testing
module.exports = {
  closeServer: function () {
    server.close();
  }
}
