import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Board WhiteRookOnePosition=  {[0, 0]}
               WhiteKnightOnePosition={[1, 0]} 
               WhiteBishopOnePosition={[2, 0]} 
               WhiteKingPosition=     {[3, 0]} 
               WhiteQueenPosition=    {[4, 0]}
               WhiteBishopTwoPosition={[5, 0]}
               WhiteKnightTwoPosition={[6, 0]} 
               WhiteRookTwoPosition=  {[7, 0]} 
               
               WhitePawnOnePosition=  {[0, 1]} 
               WhitePawnTwoPosition=  {[1, 1]} 
               WhitePawnThreePosition={[2, 1]} 
               WhitePawnFourPosition= {[3, 1]} 
               WhitePawnFivePosition= {[4, 1]} 
               WhitePawnSixPosition=  {[5, 1]} 
               WhitePawnSevenPosition={[6, 1]} 
               WhitePawnEightPosition={[7, 1]} 

               BlackRookOnePosition=  {[0, 7]}
               BlackKnightOnePosition={[1, 7]} 
               BlackBishopOnePosition={[2, 7]} 
               BlackKingPosition=     {[3, 7]} 
               BlackQueenPosition=    {[4, 7]}
               BlackBishopTwoPosition={[5, 7]}
               BlackKnightTwoPosition={[6, 7]} 
               BlackRookTwoPosition=  {[7, 7]} 
               
               BlackPawnOnePosition=  {[0, 6]} 
               BlackPawnTwoPosition=  {[1, 6]} 
               BlackPawnThreePosition={[2, 6]} 
               BlackPawnFourPosition= {[3, 6]} 
               BlackPawnFivePosition= {[4, 6]} 
               BlackPawnSixPosition=  {[5, 6]} 
               BlackPawnSevenPosition={[6, 6]} 
               BlackPawnEightPosition={[7, 6]}
        />,
      </div>
    );
  }
}

export default App;
