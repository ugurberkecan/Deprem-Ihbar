const express = require('express');
const app = express();
const session = require('express-session');
const routes = require('../routes.js');

app.use(session({
  secret: 'mySecretKeyyy',
  resave: false,
  saveUninitialized: false
}));



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
  next();
});



app.use('/api', routes);




module.exports = app;