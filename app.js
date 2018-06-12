/* jshint esnext: true */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

let dictionaryTerms = [
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((request, response, next) => {
  console.log(`${request.method} request for '${request.url}' - ${JSON.stringify(request.body)}`);
  next();
});

app.use(express.static('./public'));

app.use(cors());

app.get('/dictionary-api', (request, response) => {
  response.json(dictionaryTerms);
});

app.post('/dictionary-api', (request, response) => {
  dictionaryTerms.push(request.body);
  response.json(dictionaryTerms);
});

app.delete('/dictionary-api/:term', (request, response) => {
  dictionaryTerms = dictionaryTerms.filter(definition => {
    return definition.term.toLowerCase() !== request.params.term.toLowerCase();
  });
  response.json(dictionaryTerms);
});

app.listen(4321);

console.log('Express app running on port 4321...');

module.exports = app;
