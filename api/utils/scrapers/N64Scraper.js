const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');

const n64Scraper = () => {
  let games = [{}]
const options = {
  uri:"https://en.wikipedia.org/wiki/List_of_Nintendo_64_games",
  
};
    // use the request-promise library to fetch the HTML from pokemon.org
    rp(options)
    .then(html => {
      let games = [];
      let $ = cheerio.load(html);

      // find what element ids, classes, or tags you want from opening console in the browser
      // cheerio library lets you select elements similar to querySelector
      $("#softwarelist tbody tr").each(function(i, element) {
        let name = $(this).find('td:first').text();
        let date = $(this).find('td:nth-child(5)').text();
        let genre = $(this).find('td:nth-child(3)').text();

        games.push({"id": i,
          "name":name,
                    "date":date,
                    "genre":genre,
          })
      });
      // fs.writeFile('./n64games.json', JSON.stringify(games), function (err) {
      //   if (err) throw err;
      //   console.log('Saved!');})
      return(games)
    })
    .catch(function(err) {
      console.log("crawl failed")
      console.log(err);
    });

  return (
   games
  );
      }

module.exports = n64Scraper