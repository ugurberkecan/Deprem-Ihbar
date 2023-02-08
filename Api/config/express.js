const express = require('express');
const app = express();
const session = require('express-session');
const routes = require('../routes.js');
var cors = require('cors')

app.use(session({
  secret: 'mySecretKeyyy',
  resave: false,
  saveUninitialized: false
}));



app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
  });



app.use('/api', routes);




module.exports = app;