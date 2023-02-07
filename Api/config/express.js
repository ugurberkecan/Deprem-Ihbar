const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const routes = require("../routes.js");

require("../passport/local-strategy");

app.use(passport.initialize());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Global Variable
global.userIN = false;

app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});


app.use("/api", routes);

module.exports = app;
