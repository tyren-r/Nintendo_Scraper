import React from 'react';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  renderHome(){
    return (
      <div id="container">
       <h1> A Beginning </h1>
      </div>
    );
  }
  render() {
    return (
      <div>
      {this.renderHome()}
      </div>
    )
  }
}

export default Home