import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import NewGameButton from './components/NewGameButton/NewGameButton';

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">React Mastermind</header>
        <GuessPeg />
        <GuessPeg />
        <GuessPeg />
        <GuessPeg />
        <GuessScore />
        <GuessPeg />
        <GuessPeg />
        <GuessPeg />
        <GuessPeg />
        <GuessScore />
        <ColorPicker />
        <NewGameButton />
        <ScoreButton />
      </div>
    );
  }
}

export default App;
