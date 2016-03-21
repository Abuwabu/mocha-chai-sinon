/**
 * Simple module to test against using Mocha, Chai, and Sinon
 *
 * @module        Promise
 * @author        Adam Tait
 * @summary       Simple module for testing Mocha, Chai, and Sinon
 * @param         {string} love — promise me love
 */



module.exports = function (love) {
  return new Promise(function (resolve, reject) {

    if (typeof love !== 'string' || typeof love !== 'string') {
      return reject("Nope! Not feeling the love");
    }

    resolve("Yeah! " + love + "... Now that's what I call love");
  });
}
