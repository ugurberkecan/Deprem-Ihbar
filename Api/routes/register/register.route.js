const User = require('../../models/user');
const express = require('express');
const router = express.Router();


router.post('/', (req, res, next) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    user.save((err) => {
        if (err) {
            return next(err);
        }
        res.send({ message: 'Successfully registered.' });
    });
});



module.exports = router;