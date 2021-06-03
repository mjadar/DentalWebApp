const express = require('express');
var fs = require('fs');

const router = express.Router();

router.use(express.json())

router.get('/', (req, res) => {
    res.render('about')
});

module.exports = router;
