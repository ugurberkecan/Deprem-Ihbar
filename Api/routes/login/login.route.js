const express = require("express");
const router = express.Router();

const passport = require("../../passport/local-strategy");

router.post('/',
  passport.authenticate('local', { failureRedirect: '/', failureMessage: true }),
  function(req, res) {
    
    res.redirect('/~' + req.user.username);
  });