import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import NewGameButton from './components/NewGameButton/NewGameButton';
import GuessScore from './components/GuessScore/GuessScore';
import ScoreButton from './components/ScoreButton/ScoreButton';


class App extends Component {
  constructor(props) {
    super(props);
    let colors = ['Red', 'Yellow', 'Green', 'Blue']
    this.state = {
      colors
    }

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">React Mastermind</header>
        <GameBoard />
        <ColorPicker />
        <NewGameButton />
        <ScoreButton />
      </div>
    );
  }
}

export default App;
