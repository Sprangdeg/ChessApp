import React, { Component, PropTypes } from 'react';
import Knight from './ChessPieces'
import Square from './Square';

export default class Board extends Component {
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.knightPosition;
    const piece = (x === knightX && y === knightY) 
        ? <Knight white={false}/> 
        : null;

    return (
      <div key={i}
           style={{ width: '80px', height: '80px' }}>
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
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

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};