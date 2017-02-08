'use strict';

const VIEW_ENGINE = Symbol('app#ViewEngine');
const View = require('../../lib/view');
const engine = require('react-dom/server');

module.exports = {
  // mount `View` class to app
  // egg will create an instance to `ctx.view` at every request
  // you can use `this.render` at controller
  get [Symbol.for('egg#view')]() {
    return View;
  },

  /**
   * react viewEngine
   * @member {Object} Application#viewEngine
   */
  get viewEngine() {
    if (!this[VIEW_ENGINE]) {
      this[VIEW_ENGINE] = engine;
    }
    return this[VIEW_ENGINE];
  },
};
