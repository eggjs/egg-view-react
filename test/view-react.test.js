'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/view-react.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/view-react-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, view-react')
      .expect(200);
  });
});
