
var bunyan = require('bunyan').createLogger;
var sigyan = require('./');
var http = require('http');

var foo = bunyan({ name: 'foo' });
var bar = bunyan({ name: 'bar' });
var baz = bunyan({ name: 'foo' });

sigyan.add([ foo, bar, baz ]);

http
.createServer(function (req, res) {
  foo.info('info!');
  foo.warn('warning!');

  bar.debug('debug!');
  bar.error('error!!');

  baz.trace('trace');
  baz.fatal('EXPLOSION!');

  res.end('hi');
})
.listen(3000, function () {
  console.log('%d listening on 3000', process.pid);
});
