/* jshint esnext: true */

const express = require('express');
const cors = require('cors');
const app = express();

const dictionaryTerms = [
  {
    term: 'LOL',
    defined: 'laugh out loud'
  },
  {
    term: 'TBH',
    defined: 'to be honest'
  },
  {
    term: 'OMW',
    defined: 'on my way'
  }
];

app.use((request, response, next) => {
  console.log(`${request.method} request for '${request.url}'`);
  next();
});

app.use(express.static('./public'));

app.use(cors());

app.get('/dictionary-api', (request, response) => {
  response.json(dictionaryTerms);
});

app.listen(4321);

console.log('Express app running on port 4321...');

module.exports = app;
