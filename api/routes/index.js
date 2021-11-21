var express = require('express');
const n64Scraper = require('../utils/scrapers/N64Scraper');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(n64Scraper());
});

module.exports = router;
