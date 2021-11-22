var express = require('express');
const n64Scraper = require('../utils/scrapers/N64Scraper');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  var scraper = await n64Scraper()
  res.send(scraper)
   
});

module.exports = router;
