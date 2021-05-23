import React from 'react';
class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {activeLink: "home"};
  }
  renderNavBar() {
    return (
      <div >
       <a>home</a>
       <a>atari</a>
       <a>n64</a>
       <a>gamecube</a>
       <a>ps1</a>
       <a>ps2</a>
       <a>icon log in</a>
       <a>icon something</a>
      </div>
    );
  }
  render() {
    return (
      <div>
      {this.renderNavBar()}
      </div>
    )
  }
}

export default NavBar