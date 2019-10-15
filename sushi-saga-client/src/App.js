import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    sushIndex: 0,
    budget: 100,
    eaten: []
  };

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(json => this.setState({
        sushis: json,
        // sushIndex: json
    }))
  };

  justFour = () => {
    // becareful, 'slice' not 'splice'!
    return this.state.sushis.slice(this.state.sushIndex, this.state.sushIndex +4)
  };
  fourMore = (event) => {
    let newIndex = this.state.sushIndex + 4;
    return this.setState({
      sushIndex: newIndex + 4
    })
  };
  eat = (sushi) => {
    let newBalance = this.state.budget - sushi.price;
    if (!this.state.eaten.includes(sushi) && newBalance >= 0) {
      this.setState({
        eaten: [...this.state.eaten, sushi], 
        budget: newBalance
      })
    }
  };  
  
  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.justFour()}
                        budget={this.state.budget}
                        fourMore={this.fourMore}
                        eaten={this.state.eaten}
                        eat={this.eat}/>

        <Table budget={this.state.budget} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;