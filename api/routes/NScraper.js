var express = require('express');
var router = express.Router();
const n64 = require('../utils/scrapers/N64Scraper');
const scraper = n64.n64Scraper
/* GET users listing. */

router.get('/n64', function (req, res, next) {
    
    res._write('hello')
  })
module.exports = router;
