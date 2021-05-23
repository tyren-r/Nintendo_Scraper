import React, { Component } from "react";
import rp from "request-promise";
import cheerio from "cheerio";

const options = {
  uri:"https://cors-anywhere.herokuapp.com/https://www.nintendolife.com/games/browse?system=n64",headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'}
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
      $(".items cols-4 style-cover li .item-wrap .info .info-wrap .heading title accent-hover").each(function(i, element) {
        let name = $(this)
          .prepend()
          .text();
        names.push(name);
        console.log(html)
      });
      console.log(html)
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