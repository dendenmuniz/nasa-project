const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const api = require('./routes/api');

const app = express();

//security
var corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(morgan('combined'));

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', api);

// /* allow react deal with routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
