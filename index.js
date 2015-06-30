exports.startServer = function () {
  var app = require('express')();

  app.listen(app.get('port'), function () {
    console.log('Server listening at http://%s:%s', server.address().address, server.address().port);
  });
};