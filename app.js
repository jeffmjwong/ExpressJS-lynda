/* jshint esnext: true */

const express = require('express');

const app = express();

app.use((request, response, next) => {
  console.log(`${request.method} request for '${request.url}'`);
  next();
});

app.use(express.static('./public'));

app.listen(4321);

console.log('Express app running on port 4321...');

module.exports = app;
