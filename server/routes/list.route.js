const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log('in server GET');
})

module.exports = router;