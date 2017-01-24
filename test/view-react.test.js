'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const htmlRendered = '<!DOCTYPE html><div data-reactroot="" data-reactid="1" data-react-checksum="1355557741"><!-- react-text: 2 -->hello <!-- /react-text --><!-- react-text: 3 -->world<!-- /react-text --></div>';

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

  it('should render', function* () {
    const agent = request.agent(app.callback());
    yield agent
      .get('/')
      .expect('content-type', 'text/html; charset=utf-8')
      .expect(htmlRendered)
      .expect(200);
  });

});
