const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const routes = require('../routes.js');

require('../passport/local-strategy');

app.use(passport.initialize());

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api', routes);










module.exports = app;