const express = require('express');
const router = express.Router();
const registerRoutes = require('./routes/register/register.route.js');
const ihbarRoutes  = require('./routes/ihbar/ihbar.route.js');


router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/register', registerRoutes);

router.use('/ihbar', ihbarRoutes);

module.exports = router;