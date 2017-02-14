import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board.js';
import { connect } from "react-redux"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header"> <div style={{fontSize: '3em', display: 'inline-block', position: 'relative', top: '-20px'}}>REACT CHESS</div> <img src={logo} className="App-logo" alt="logo" /> </div>             
        <Board WhiteRookOnePosition=  {this.props.WhiteRookOne}
/*               WhiteKnightOnePosition={this.props.WhiteKnightOnePosition} 
               WhiteBishopOnePosition={this.props.WhiteBishopOnePosition} 
               WhiteKingPosition=     {this.props.WhiteKingPosition} 
               WhiteQueenPosition=    {this.props.WhiteQueenPosition}
               WhiteBishopTwoPosition={this.props.WhiteBishopTwoPosition}
               WhiteKnightTwoPosition={this.props.WhiteKnightTwoPosition} 
               WhiteRookTwoPosition=  {this.props.WhiteRookTwoPosition} 
               
               WhitePawnOnePosition=  {this.props.WhitePawnOnePosition} 
               WhitePawnTwoPosition=  {this.props.WhitePawnTwoPosition} 
               WhitePawnThreePosition={this.props.WhitePawnThreePosition} 
               WhitePawnFourPosition= {this.props.WhitePawnFourPosition} 
               WhitePawnFivePosition= {this.props.WhitePawnFivePosition} 
               WhitePawnSixPosition=  {this.props.WhitePawnSixPosition} 
               WhitePawnSevenPosition={this.props.WhitePawnSevenPosition} 
               WhitePawnEightPosition={this.props.WhitePawnEightPosition} 

               BlackRookOnePosition=  {this.props.BlackRookOnePosition}
               BlackKnightOnePosition={this.props.BlackKnightOnePosition} 
               BlackBishopOnePosition={this.props.BlackBishopOnePosition} 
               BlackKingPosition=     {this.props.BlackKingPosition} 
               BlackQueenPosition=    {this.props.BlackQueenPosition}
               BlackBishopTwoPosition={this.props.BlackBishopTwoPosition}
               BlackKnightTwoPosition={this.props.BlackKnightTwoPosition} 
               BlackRookTwoPosition=  {this.props.BlackRookTwoPosition} 
               
               BlackPawnOnePosition=  {this.props.BlackPawnOnePosition} 
               BlackPawnTwoPosition=  {this.props.BlackPawnTwoPosition} 
               BlackPawnThreePosition={this.props.BlackPawnThreePosition} 
               BlackPawnFourPosition= {this.props.BlackPawnFourPosition} 
               BlackPawnFivePosition= {this.props.BlackPawnFivePosition} 
               BlackPawnSixPosition=  {this.props.BlackPawnSixPosition} 
               BlackPawnSevenPosition={this.props.BlackPawnSevenPosition} 
               BlackPawnEightPosition={this.props.BlackPawnEightPosition}*/
        />,
      </div>
    );
  }
}



export default connect(store => {
  return {
    WhiteRookOne: store.WhiteRookOne
  };
})(App);
