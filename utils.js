/*jslint node: true, esversion: 6 */
"use strict";



/**
 * UTILITY FUNCTIONS
 * @version 0.0.1
 * @author Pixels & Bytes
 *
 * Faux utility functions to test.
 *
 * @requires glob
 * @requires fs
 */



// THE REQUIREMENTS
var fs = require('fs');
var glob = require('glob');



module.exports = {
  logToConsole: function (msg) {
    console.log(msg);
  },

  globSyncToTest: function (path) {
    glob.sync('*.js', {
      cwd: path
    });
  },

  globAsyncToTest: function (path, callback) {
    // Who the fuck calls glob.glob to get a test working?!
    glob.glob('*.js', {
      cwd: path
    }, callback());
  }
};
