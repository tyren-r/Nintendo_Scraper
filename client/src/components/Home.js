import { Button } from '@material-ui/core';
import React from 'react';
import ScraperTable from './scraper-table/ScraperTableUI';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {buttonClicked:false};
  }
  renderHome(){
    return (
      <div style={{textAlign:'center'}}>
        {this.state.buttonClicked === false ? (
       <Button style={{marginTop:'20vh'}} color="primary" variant="contained" onClick={() => this.setState({buttonClicked:true})}>Scrape Wikapedia for all N64 Games</Button>
        ) :
        (<ScraperTable/>)}
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