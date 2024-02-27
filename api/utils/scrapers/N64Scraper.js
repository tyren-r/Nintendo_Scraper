const rp = require('request-promise');
const cheerio = require('cheerio');

const n64Scraper = async () => {
const options = {
  uri:"https://en.wikipedia.org/wiki/List_of_Nintendo_64_games",
  
};
const getGames = async () => {
  let games = [];
  await rp(options)
   .then( html => {
     let $ = cheerio.load(html);
     new Promise((resolve, reject) => {
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
   })

   .catch(function(err) {
     console.log("crawl failed")
     console.log(err);
   })
   return games
}
return(
getGames()
);
}

module.exports = n64Scraper