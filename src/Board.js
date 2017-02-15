import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { moveKnight, canMoveKnight } from './Game'
import Square from './Square';
import Knight from './ChessPieces/Knight';
import King from './ChessPieces/King';
import Queen from './ChessPieces/Queen';
import Rook from './ChessPieces/Rook';
import Bishop from './ChessPieces/Bishop';
import Pawn from './ChessPieces/Pawn';
import BoardSquare from './BoardSquare';
import { TYPES, COLORS } from './Constants';



class Board extends Component {
  renderSquare(i, piece, color) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i}
           style={{ width: '80px', height: '80px' }}
           onClick={() => this.handleSquareClick(x, y)}>
      <BoardSquare x={x}
                   y={y}>
        {this.renderPiece(x, y, piece, color)}
      </BoardSquare>
      </div>
    );
  }

renderPiece(x, y, piece, color) {
    const whitePlayer = color === COLORS.WHITE;

    switch (piece) {
       case TYPES.PAWN: {
          return <Pawn whiteplayer={whitePlayer}/>;
       }
      case TYPES.BISHOP: {
          return <Bishop whiteplayer={whitePlayer}/>;
       }
      case TYPES.KNIGHT: {
          return <Knight whiteplayer={whitePlayer}/>;
       }
      case TYPES.QUEEN: {
          return <Queen whiteplayer={whitePlayer}/>;
       }
      case TYPES.KING: {
          return <King whiteplayer={whitePlayer}/>;
       }
      case TYPES.ROOK: {
          return <Rook whiteplayer={whitePlayer}/>;
       }
       default: return null;
    }
}





handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

  render() {
    const squares = [];
    var board = this.props.board;
    for (let i = 0; i < 64; i++) {
      if(board[i] === TYPES.EMPTY){
         squares.push(this.renderSquare(i, TYPES.EMPTY, TYPES.EMPTY));
      }
      else{
        let pieceType = getPieceType(board[i]);
        let pieceColor = getPieceColor(board[i]);
        squares.push(this.renderSquare(i, pieceType, pieceColor));
      }
    }

    return (
      <div style={{
        width: '640px',
        height: '640px',
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '40px',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderColor: '#332418'
      }}>
        {squares}
      </div>
    );
  }
}

function getPieceType(piece){
  return piece % COLORS.WHITE === 0 ? piece/COLORS.WHITE : piece/COLORS.BLACK;
}

function getPieceColor(piece){
  return piece % COLORS.WHITE === 0 ? COLORS.WHITE : COLORS.BLACK;
}

export default DragDropContext(HTML5Backend)(Board);