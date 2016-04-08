/*jslint node: true, esversion: 6 */
/*global describe, it */
"use strict";



/**
 * UNIT TESTS FOR BUILDER
 *
 * @requires mocha
 * @requires chai
 * @requires sinon
 * @requires sinon-chai
 * @requires utils.js
 */



// REQUIREMENTS
var utils = require('../utils.js');
var chai = require('chai');
var glob = require('glob');
var sinon = require('sinon');
var sinonChai = require("sinon-chai");


// SETTINGS
var expect = chai.expect;
chai.use(sinonChai);



// THE TESTS
describe.only('Utils', function () {

  describe('logToConsole method', function () {
    beforeEach(function () {
      sinon.spy(console, 'log');
    });

    afterEach(function () {
      console.log.restore();
    });

    it('should call console.log once', function() {
      utils.logToConsole('Log Called!');
      expect(console.log).to.be.calledOnce;
    });
  });


  describe('globSyncToTest method', function () {
    beforeEach(function () {
      sinon.spy(glob, 'sync');
    });

    afterEach(function () {
      glob.sync.restore();
    });

    it('should call glob.sync once', function() {
      utils.globSyncToTest('../models/');
      expect(glob.sync).to.be.calledOnce;
    });
  });


  describe('globAsyncToTest method', function () {
    const callback = sinon.spy();

    beforeEach(function (done) {
      sinon.spy(glob, 'glob');
      utils.globAsyncToTest('', callback);
      done();
    });

    afterEach(function () {
      glob.glob.restore();
    });

    it ('should call our callback once', function () {
      expect(callback).to.have.been.calledOnce;
    });

    it('should call glob once', function() {
      expect(glob.glob).to.be.calledOnce;
    });
  });
});
