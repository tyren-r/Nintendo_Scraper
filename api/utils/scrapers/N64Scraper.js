const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');

const n64Scraper = async () => {
const options = {
  uri:"https://en.wikipedia.org/wiki/List_of_Nintendo_64_games",
  
};
return(
    // use the request-promise library to fetch the HTML from pokemon.org
   await rp(options)
    .then( html => {
      
      let $ = cheerio.load(html);
      var bar = new Promise((resolve, reject) => {
        let games = [];
        $("#softwarelist tbody tr").each( function(i, element) {
          let name = $(this).find('td:first').text();
          let date = $(this).find('td:nth-child(5)').text();
          let genre = $(this).find('td:nth-child(3)').text();
  
          games.push({"id": i,
            "name":name,
                      "date":date,
                      "genre":genre,
            })
            if (i === 398) resolve(games);
        
      }) 
    });
    
    bar.then(games => {
        return games
    });
      // find what element ids, classes, or tags you want from opening console in the browser
      // cheerio library lets you select elements similar to querySelector
     return(bar)

      // fs.writeFile('./n64games.json', JSON.stringify(games), function (err) {
      //   if (err) throw err;
      //   console.log('Saved!');})
    })

    .catch(function(err) {
      console.log("crawl failed")
      console.log(err);
    })
)
      }

module.exports = n64Scraper