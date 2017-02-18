import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board.js';
import { connect } from "react-redux"
import { moveAction } from "./actions/chessAction"

class App extends Component {
  componentWillMount(){
    
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header"> <div style={{fontSize: '3em', display: 'inline-block', position: 'relative', top: '-20px'}}>PRIME CHESS</div> <img src={logo} className="App-logo" alt="logo" /> </div>             
        <Board board={this.props.board} move={this.props.dispatch}/>,
      </div>
    );
  }
}

export default connect(store => {
  return {
    board: store.chess.board,
  };
})(App);
