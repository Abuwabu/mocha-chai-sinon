var request = require('request');
var expect = require('chai').expect;
var server = require('../server.js');
var localUrl = 'http://localhost:3000/';


describe('Hello World Server', function () {
  
  after(function (){
    server.close();
  });

  describe('GET /', function () {

    it('returns status code 200', function () {
      request.get(localUrl, function (error, response, body) {
        return expect(response.statusCode).to.equal(200);
      });
    });

    it('returns Hello World!', function () {
      request.get(localUrl, function (error, response, body) {
        return expect(body).to.equal('Hello World!');
      });
    });
  });

  describe('GET /about', function () {

    it('returns status code 200', function () {
      var aboutUrl = localUrl + 'about';

      request.get(aboutUrl, function (error, response, body) {
        if (error) {
          console.log(error);
          // Probably assert a failure here.
        }
        return expect(response.statusCode).to.equal(200);
      });
    });

    it('returns About Us', function () {
      var aboutUrl = localUrl + 'about';

      request.get(aboutUrl, function (error, response, body) {
        return expect(body).to.equal('About Us');
      });
    });
  });
});