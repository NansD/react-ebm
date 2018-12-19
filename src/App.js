import React, { Component } from 'react';
import Count from './count/Count';
import PokemonList from './pokemon/PokemonList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonList/>
      </div>
    );
  }
}

export default App;
