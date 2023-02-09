const express = require('express');
const app = express();
const session = require('express-session');
const routes = require('../routes.js');
const cors = require('./cors.js');

app.use(cors);

app.use(session({
  secret: 'mySecretKeyyy',
  resave: false,
  saveUninitialized: false
}));



app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api', routes);

module.exports = app;