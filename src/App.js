import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board.js';
import History from './History.js'
import { connect } from "react-redux"

class App extends Component {
  componentWillMount(){
    
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header"> <div style={{fontSize: '3em', display: 'inline-block', position: 'relative', top: '-20px'}}>PRIME CHESS</div> <img src={logo} className="App-logo" alt="logo" /> </div>             
        <div style={{width: '50%', float: 'left'}}>
          <Board board={this.props.board} move={this.props.dispatch}/>
        </div>
        <div style={{width: '50%', float: 'right'}}>
          <History store={this.props.store} moveHistory={this.props.dispatch}/>
        </div>
      </div>
    );
  }
}

export default connect(store => {
  return {
    board: store.currentState.chess.board,
    //branch: store.branches[store.currentBranch]
    store: store,
  };
})(App);
