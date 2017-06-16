'use strict';

const path = require('path');
const React = require('react');
const escape = require('escape-html');
const INPUT_CONTEXT = Symbol('egg-view-react#INPUT_CONTEXT');
const stringUtil = require('./string_util');

class View {

  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.config = ctx.app.config.view;
    this.extname = this.config.extname.replace(/^\.?/, '.');
  }

  [INPUT_CONTEXT](locals) {
    const context = locals[this.config.contextGetter];
    let string = JSON.stringify(context);
    string = escape(string);
    return `<script> window.${this.config.globalVariable} = ${string}</script>`;
  }

  render(name, locals) {
    const reactFile = path.join(this.config.dir, name + this.extname);
    let contectJavascript;

    return new Promise((resolve, reject) => {
      let html = '<!DOCTYPE html>';
      try {
        const reactComponent = require(reactFile);
        html += this.app.viewEngine.renderToString(React.createElement(reactComponent.default || reactComponent, locals || {}));
      } catch (error) {
        reject(error);
      }

      if (this.config.injectContext) {
        // 添加页面数据
        contectJavascript = this.INPUT_CONTEXT(locals);
        html = stringUtil.insertString(html, '</body>', contectJavascript);
      }

      resolve(html);
    });
  }

  renderString() {
    return Promise.reject('not implemented yet!');
  }

}

module.exports = View;
