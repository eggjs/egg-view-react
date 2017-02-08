'use strict';

const path = require('path');
const React = require('react');

class View {

  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.config = ctx.app.config.view;
    this.extname = this.config.extname.replace(/^\.?/, '.');
  }

  render(name, locals) {
    const reactFile = path.join(this.config.dir, name + this.extname);

    return new Promise((resolve, reject) => {
      let html = '<!DOCTYPE html>';
      try {
        const reactComponent = require(reactFile);
        html += this.app.viewEngine.renderToString(React.createElement(reactComponent.default || reactComponent, locals || {}));
      } catch (error) {
        reject(error);
      }

      resolve(html);
    });
  }

  renderString() {
    return Promise.reject('not implemented yet!');
  }

}

module.exports = View;
