import React, { Component, PropTypes } from 'react';
import Square from './Square';
import { canMove } from './Game';
import { STRINGTYPES, TYPES, getIndex, COLORS } from './Constants';
import { DropTarget } from 'react-dnd';
import { moveAction, enPassantAction, promotion } from "./actions/chessAction"


const squareTarget = {
  canDrop(props, monitor) {
    const source = monitor.getItem();
    const moveFrom = [source.x, source.y];
    const moveTo = [props.x, props.y];
    return canMove(source.type, source.color, moveFrom, moveTo, props.board, props.history);
  },

  drop(props, monitor) {
    const source = monitor.getItem();
    const moveFrom = [source.x, source.y];
    const moveTo = [props.x, props.y];
    if(source.type === TYPES.PAWN && moveEnPassant(moveFrom, moveTo, props.board)){
        const emptySquare = source.color === COLORS.WHITE ? [props.x, props.y-1] : [props.x, props.y+1]
        props.move(enPassantAction(source.type, source.color, moveFrom, moveTo, emptySquare))
    }
    else if(source.type === TYPES.PAWN && (props.y === 7 || props.y === 0)){
      props.move(promotion(TYPES.QUEEN, source.color, moveFrom, moveTo));
    }
    else{
      props.move(moveAction(source.type, source.color, moveFrom, moveTo));
    }
  }
};

function moveEnPassant(moveFrom, moveTo, board){
  const fromX = moveFrom[0];
  const toX = moveTo[0];
  const dx = toX - fromX;

  if(Math.abs(dx) === 1 && board[getIndex(moveTo)] === TYPES.EMPTY)
    return true;
  else
    return false;
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class BoardSquare extends Component {
  renderOverlay(color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  }

  render() {
    const { x, y, connectDropTarget, isOver, canDrop } = this.props;
    const black = (x + y) % 2 === 1;

 return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <Square black={black}>
          {this.props.children}
        </Square>
        {isOver && !canDrop && this.renderOverlay('#c4645a')}
        {!isOver && canDrop && this.renderOverlay('#ccc43b')}
        {isOver && canDrop && this.renderOverlay('#70db46')}
      </div>
    );
  }
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
};

export default DropTarget(STRINGTYPES.PIECE, squareTarget, collect)((BoardSquare));