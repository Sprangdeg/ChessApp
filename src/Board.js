import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { moveKnight, canMoveKnight } from './Game'

import Square from './Square';

var Knight = require( './ChessPieces').Knight;
var King = require( './ChessPieces').King;
var Queen = require( './ChessPieces').Queen;
var Rook = require( './ChessPieces').Rook;
var Bishop = require( './ChessPieces').Bishop;
var Pawn = require( './ChessPieces').Pawn;

class Board extends Component {
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;
    const white = !black;

    //***********  WHITE  ***************/
    const [wrookOneX, wrookOneY] = this.props.WhiteRookOnePosition;
    const [wrookTwoX, wrookTwoY] = this.props.WhiteRookTwoPosition;

    const [wknightOneX, wknightOneY] = this.props.WhiteKnightOnePosition; 
    const [wknightTwoX, wknightTwoY] = this.props.WhiteKnightTwoPosition;

    const [wbishopOneX, wbishopOneY] = this.props.WhiteBishopOnePosition;
    const [wbishopTwoX, wbishopTwoY] = this.props.WhiteBishopTwoPosition;

    const [wkingX, wkingY] = this.props.WhiteKingPosition;
    const [wqueenX, wqueenY] = this.props.WhiteQueenPosition;

    const [wpawnOneX, wpawnOneY] = this.props.WhitePawnOnePosition;
    const [wpawnTwoX, wpawnTwoY] = this.props.WhitePawnTwoPosition;
    const [wpawnThreeX, wpawnThreeY] = this.props.WhitePawnThreePosition;
    const [wpawnFourX, wpawnFourY] = this.props.WhitePawnFourPosition;
    const [wpawnFiveX, wpawnFiveY] = this.props.WhitePawnFivePosition;
    const [wpawnSixX, wpawnSixY] = this.props.WhitePawnSixPosition;
    const [wpawnSevenX, wpawnSevenY] = this.props.WhitePawnSevenPosition;
    const [wpawnEightX, wpawnEightY] = this.props.WhitePawnEightPosition;

    //***********  BLACK  ***************/
    const [brookOneX, brookOneY] = this.props.BlackRookOnePosition;
    const [brookTwoX, brookTwoY] = this.props.BlackRookTwoPosition;

    const [bknightOneX, bknightOneY] = this.props.BlackKnightOnePosition; 
    const [bknightTwoX, bknightTwoY] = this.props.BlackKnightTwoPosition;

    const [bbishopOneX, bbishopOneY] = this.props.BlackBishopOnePosition;
    const [bbishopTwoX, bbishopTwoY] = this.props.BlackBishopTwoPosition;

    const [bkingX, bkingY] = this.props.BlackKingPosition;
    const [bqueenX, bqueenY] = this.props.BlackQueenPosition;

    const [bpawnOneX, bpawnOneY] = this.props.BlackPawnOnePosition;
    const [bpawnTwoX, bpawnTwoY] = this.props.BlackPawnTwoPosition;
    const [bpawnThreeX, bpawnThreeY] = this.props.BlackPawnThreePosition;
    const [bpawnFourX, bpawnFourY] = this.props.BlackPawnFourPosition;
    const [bpawnFiveX, bpawnFiveY] = this.props.BlackPawnFivePosition;
    const [bpawnSixX, bpawnSixY] = this.props.BlackPawnSixPosition;
    const [bpawnSevenX, bpawnSevenY] = this.props.BlackPawnSevenPosition;
    const [bpawnEightX, bpawnEightY] = this.props.BlackPawnEightPosition;


    let piece = null;
    
    if(x === wrookOneX && y === wrookOneY)            piece = <Rook white={white}/>;
    else if(x === wrookTwoX && y === wrookTwoY)       piece = <Rook white={white}/>;
    else if(x === wknightOneX && y === wknightOneY)   piece = <Knight white={white}/>;
    else if(x === wknightTwoX && y === wknightTwoY)   piece = <Knight white={white}/>;
    else if(x === wbishopOneX && y === wbishopOneY)   piece = <Bishop white={white}/>;
    else if(x === wbishopTwoX && y === wbishopTwoY)   piece = <Bishop white={white}/>;
    else if(x === wkingX && y === wkingY)             piece = <King white={white}/>;
    else if(x === wqueenX && y === wqueenY)           piece = <Queen white={white}/>;
    else if(x === wpawnOneX && y === wpawnOneY)       piece = <Pawn white={white}/>;
    else if(x === wpawnTwoX && y === wpawnTwoY)       piece = <Pawn white={white}/>;
    else if(x === wpawnThreeX && y === wpawnThreeY)   piece = <Pawn white={white}/>;
    else if(x === wpawnFourX && y === wpawnFourY)     piece = <Pawn white={white}/>;
    else if(x === wpawnFiveX && y === wpawnFiveY)     piece = <Pawn white={white}/>;
    else if(x === wpawnSixX && y === wpawnSixY)       piece = <Pawn white={white}/>;
    else if(x === wpawnSevenX && y === wpawnSevenY)   piece = <Pawn white={white}/>;
    else if(x === wpawnEightX && y === wpawnEightY)   piece = <Pawn white={white}/>;

    else if(x === brookOneX && y === brookOneY)       piece = <Rook white={black}/>;
    else if(x === brookTwoX && y === brookTwoY)       piece = <Rook white={black}/>;
    else if(x === bknightOneX && y === bknightOneY)   piece = <Knight white={black}/>;
    else if(x === bknightTwoX && y === bknightTwoY)   piece = <Knight white={black}/>;
    else if(x === bbishopOneX && y === bbishopOneY)   piece = <Bishop white={black}/>;
    else if(x === bbishopTwoX && y === bbishopTwoY)   piece = <Bishop white={black}/>;
    else if(x === bkingX && y === bkingY)             piece = <King white={black}/>;
    else if(x === bqueenX && y === bqueenY)           piece = <Queen white={black}/>;
    else if(x === bpawnOneX && y === bpawnOneY)       piece = <Pawn white={black}/>;
    else if(x === bpawnTwoX && y === bpawnTwoY)       piece = <Pawn white={black}/>;
    else if(x === bpawnThreeX && y === bpawnThreeY)   piece = <Pawn white={black}/>;
    else if(x === bpawnFourX && y === bpawnFourY)     piece = <Pawn white={black}/>;
    else if(x === bpawnFiveX && y === bpawnFiveY)     piece = <Pawn white={black}/>;
    else if(x === bpawnSixX && y === bpawnSixY)       piece = <Pawn white={black}/>;
    else if(x === bpawnSevenX && y === bpawnSevenY)   piece = <Pawn white={black}/>;
    else if(x === bpawnEightX && y === bpawnEightY)   piece = <Pawn white={black}/>;

    else                                            piece = null;
    
    //const piece1 = (x === kingX && y === kingY) ? <King white={true}/> : null;

    return (
      <div key={i}
           style={{ width: '80px', height: '80px' }}
           onClick={() => this.handleSquareClick(x, y)}>
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
  }

handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '640px',
        height: '640px',
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '40px',
        borderStyle: 'solid',
        borderWidth: '5px'
      }}>
        {squares}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};