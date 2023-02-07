const express = require("express");
const router = express.Router();

const passport = require("../../passport/local-strategy");

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      handleResponse(res, 500, "error");
    }
    if (!user) {
      handleResponse(res, 404, "User not found");
    }
    if (user) {
      req.logIn(user, function (err) {
        if (err) {
          handleResponse(res, 500, "error");
        }
        handleResponse(res, 200, "success");
      });
    }
  })(req, res, next);
});

function handleResponse(res, code, statusMsg) {
  res.status(code).json({ status: statusMsg });
}

module.exports = router;