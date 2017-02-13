import React, { Component, PropTypes } from 'react';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';
import WhitePawn_img from './WhitePawn.png';
import BlackPawn_img from './BlackPawn.png';

const pawnSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class Pawn extends Component {
    componentDidMount() {
    const img = new Image();
    img.src = this.props.whiteplayer ? WhitePawn_img : BlackPawn_img;
    img.onload = () => this.props.connectDragPreview(img);
  }
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
          fontSize:'65px',
          }}>{this.props.whitesquare ? '♙' : '♟'}</div>
    );
  }
}

Pawn.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.PAWN, pawnSource, collect)(Pawn);

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