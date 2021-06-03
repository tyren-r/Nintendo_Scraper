import React, { Component } from "react";
import rp from "request-promise";
import cheerio from "cheerio";

const options = {
  uri:"https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/List_of_Nintendo_64_games",
};
class N64Scraper extends Component {
  state = { names : [] };

  

  
  componentDidMount() {
    // use the request-promise library to fetch the HTML from pokemon.org
    rp(options)
    .then(html => {
      let names = [];
      let $ = cheerio.load(html);

      // find what element ids, classes, or tags you want from opening console in the browser
      // cheerio library lets you select elements similar to querySelector
      $("#softwarelist tbody tr").each(function(i, element) {
        let name = $(this)
        .find('td:first').text();
        names.push(name);
      });
      this.setState({ names });
    })
    .catch(function(err) {
      console.log("crawl failed");
    });
}

render() {
  return (
    <div>
      <ul>
        {this.state.names.map(name => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </div>
  );
}
}

export default N64Scraper;