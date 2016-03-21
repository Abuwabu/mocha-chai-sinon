var request = require('request');
var expect = require('chai').expect;
var helloWorld = require('../server.js');
var localUrl = 'http://localhost:3000/';


describe('Hello World Server', function () {

  describe('GET /', function () {

    it('returns status code 200', function (done) {
      request.get(localUrl, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('returns Hello World!', function (done) {
      request.get(localUrl, function (error, response, body) {
        expect(body).to.equal('Hello World!');
        done();
      });
    });
  });

  describe('GET /about', function () {

    it('returns status code 200', function (done) {
      var aboutUrl = localUrl + 'about';

      request.get(aboutUrl, function (error, response, body) {
        if (error) {
          console.log(error);
          // Probably assert a failure here.
        }
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('returns About Us', function (done) {
      var aboutUrl = localUrl + 'about';

      request.get(aboutUrl, function (error, response, body) {
        expect(body).to.equal('About Us');
        helloWorld.closeServer();
        done();
      });
    });
  });
});