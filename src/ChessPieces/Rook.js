import React, { Component, PropTypes } from 'react';
import { STRINGTYPES, TYPES, COLORS } from '../Constants';
import { DragSource } from 'react-dnd';
import WhiteRook_img from './images/WhiteRook.png';
import BlackRook_img from './images/BlackRook.png';

const rookSource = {
  beginDrag(props) {
    let colour = props.whiteplayer ? COLORS.WHITE : COLORS.BLACK;
    return {type:TYPES.ROOK, color: colour, x: props.posX, y:props.posY};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class Rook extends Component {
  componentDidMount() {
    const img = new Image();
    img.src = this.props.whiteplayer ? WhiteRook_img : BlackRook_img;
    img.onload = () => this.props.connectDragPreview(img);
  }
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
          fontSize:'65px',
          }}>{this.props.whiteplayer ? '♖' : '♜'}</div>
    );
  }
}

Rook.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(STRINGTYPES.ROOK, rookSource, collect)(Rook);

/*var Knight = function (props) {
        return <div style={{
          fontSize:'65px',
          }}>{props.white ? '♘' : '♞'}</div>;       
      };

var King = function (props) {
        return <div style={{
          fontSize:'65px',
          }}>{props.white ? '♔' : '♚'}</div>;       
      };

var Queen = function (props) {
        return <div style={{
          fontSize:'65px',
          }}>{props.white ? '♕' : '♛'}</div>;       
      };

var Rook = function (props) {
        return <div style={{
          fontSize:'65px',
          }}>{props.white ? '♖' : '♜'}</div>;       
      };

var Bishop = function (props) {
        return <div style={{
          fontSize:'65px',
          }}>{props.white ? '♗' : '♝'}</div>;       
      };

var Pawn = function (props) {
        return <div style={{
          fontSize:'65px',
          }}>{props.white ? '♙' : '♟'}</div>;       
      };

module.exports = {Knight: Knight
                 ,King: King
                 ,Queen: Queen
                 ,Rook: Rook
                 ,Bishop: Bishop
                 ,Pawn: Pawn
                };
          */