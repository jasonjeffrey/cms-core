exports.startServer = function () {
  var app = require('express')();

  app.listen(8080, function () {
    console.log('Server listening at http://%s:%s', server.address().address, server.address().port);
  });
};