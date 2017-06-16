'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.react = {
    extname: 'js',
    dir: path.join(appInfo.baseDir, 'app/view'),
    injectContext: true,
    globalVariable: '__REACT_DATA__',
    contextGetter: 'data',
  };
  return config;
};
