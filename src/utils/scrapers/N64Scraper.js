import React, { Component } from "react";
import rp from "request-promise";


class N64Scraper extends Component {
  state = {};

  componentDidMount() {
    // use the request-promise library to fetch the HTML from pokemon.org
    rp("https://cors-anywhere.herokuapp.com/https://www.nintendolife.com/games/browse?system=n64")
      .then(html => console.log(html))
  }

  render() {
    return (
      <div>
        <p>hello</p>
      </div>
    );
  }
}

export default N64Scraper;