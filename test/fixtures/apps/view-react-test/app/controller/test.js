'use strict';

module.exports = function* () {
  require('babel-register');

  yield this.render('test', {
    name: 'world',
  });
};