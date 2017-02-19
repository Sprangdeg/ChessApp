import React, { Component, PropTypes } from 'react';
import Square from './Square';
import { canMove } from './Game';
import { STRINGTYPES } from './Constants';
import { DropTarget } from 'react-dnd';
import { moveAction } from "./actions/chessAction"


const squareTarget = {
  canDrop(props, monitor) {
    const source = monitor.getItem();
   return canMove(source.type, source.color, [source.x, source.y], [props.x, props.y], props.board);
  },

  drop(props, monitor) {
    const source = monitor.getItem();
    props.move(moveAction(source.type, source.color, [source.x, source.y], [props.x, props.y]));
  }
};

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
    const { x, y, connectDropTarget, isOver, canDrop, children } = this.props;
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

export default DropTarget(STRINGTYPES.PIECE, squareTarget, collect)(BoardSquare);