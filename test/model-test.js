/**
 * Unit tests for Todo model.
 * Using Mocha/Chai/Sinon
 *
 * @author        Adam Tait
 * @summary       Unit tests for todo.js
 *
 * @requires      sequelize
 */



// NPM REQUIREMENTS
var Sequelize = require('sequelize');
var chai = require('chai');
var expect = require('chai').expect;
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);



// GLOBAL VARIABLES
var sequelize = new Sequelize(undefined, undefined, undefined, {
  'dialect': 'sqlite',
  'storage': __dirname + '/todo-model-spec.sqlite'
});

var Todo = sequelize.import('../models/todo.js');

const EMPTY_DESCRIPTION = '';
const SHORT_DESCRIPTION = 'A small, valid description';
const LONG_DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetuer adipiscing'    +
      'elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ' +
      'penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ' +
      'quam felis, ultricies nec, pellentesque eu, pretium qe';



// THE TESTS
describe('Todo model', function () {


  before(function () {
    // Build the test db
    sequelize.sync({ force: true });
  });


  describe('description', function () {

    it('should not be null', function (done) {

      var todoWithNullDescription = Todo.create({});

      expect(todoWithNullDescription)
        .to.eventually.be.rejectedWith("notNull Violation: description cannot be null");
      done();
    });

    it('should have between 1 — 250 characters', function (done) {
      var todoWithShortDescription = Todo.create({
        description: SHORT_DESCRIPTION
      });

      expect(todoWithShortDescription).to.eventually.be.fulfilled;
      done();
    });

    it('should not be less than 1 character', function (done) {
      var todoWithEmptyDescription = Todo.create({
        description: EMPTY_DESCRIPTION
      });

      expect(todoWithEmptyDescription)
        .to.eventually.be.rejectedWith("Validation error: Validation len failed");
      done();
    });

    it('should not be more than 250 characters', function (done) {
      var todoWithLongDescription = Todo.create({
        description: LONG_DESCRIPTION
      });

      expect(todoWithLongDescription)
        .to.eventually.be.rejectedWith("Validation error: Validation len failed");
      done();
    });

  });
});
