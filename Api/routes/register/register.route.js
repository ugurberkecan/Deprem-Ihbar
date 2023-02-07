const User = require('../../models/user');
const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();


router.post('/', async (req, res, next) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, process.env.SALT_ROUNDS);  
        const user = new User({
        username: req.body.username,
        password: hashedPassword
    });
    user.save((err) => {
        if (err) {
            return next(err);
        }
        res.send({ message: 'Successfully registered.' }).status(201).redirect('/login');
    });
    } catch{
        res.redirect('/register').status(500)
    }
});



module.exports = router;