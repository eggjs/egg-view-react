'use strict';

const React = require('react');

const Test = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      name: '',
    };
  },

  render() {
    let { name } = this.props;

    return (
          <div>hello {name}</div>
    );
  },
});

module.exports = Test;