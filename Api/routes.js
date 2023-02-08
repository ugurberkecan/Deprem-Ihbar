const express = require('express');
const router = express.Router();
const ihbarRoutes  = require('./routes/ihbar/ihbar.route.js');


router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/ihbar', ihbarRoutes);

module.exports = router;