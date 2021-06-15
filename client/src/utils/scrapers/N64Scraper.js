import React, { Component } from "react";
import rp from "request-promise";
import cheerio from "cheerio";

const writeJsonFile = require('write-json-file');

const options = {
  uri:"https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/List_of_Nintendo_64_games",
};
class N64Scraper extends Component {
  state = { games : [{}]  };

  

  
  componentDidMount() {
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
      this.setState({ games });
      console.log(this.state.games)
       writeJsonFile('n64games.json', {foo: true});
    })
    .catch(function(err) {
      console.log("crawl failed")
      console.log(err);
    });


}

render() {
  return (
    <div>
      <table>
        {this.state.games.map(game => {
          return (
            <div>
          <tr key={game.id}>
            <td>{game.name}</td>
            <td>{game.date}</td>
            <td>{game.genre}</td>
          </tr>
            </div>
          )
        })}
      </table>
    </div>
  );
}
}

export default N64Scraper;