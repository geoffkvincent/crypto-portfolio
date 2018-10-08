import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import axios from 'axios'

class Home extends Component {
  state = {coin: {}}

  clicky=() =>{
    axios.post('/api/coins?coin=btc')
    .then(res => {debugger})
  }

  click2=() =>{
    axios.post('/api/coins')
    .then(res => {debugger})
  }

  render() {
    return (
      <>
      <Button onClick={this.clicky}>
        Click Me
      </Button>
      <Button onClick={this.clicky2}>
       Coins
      </Button>
      </>
    );
  }
}

export default Home;

