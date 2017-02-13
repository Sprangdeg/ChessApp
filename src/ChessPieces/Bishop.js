import React, { Component, PropTypes } from 'react';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';
import WhiteBishop_img from './WhiteBishop.png';
import BlackBishop_img from './BlackBishop.png';

const bishopSource = {
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

class Bishop extends Component {
    componentDidMount() {
    const img = new Image();
    img.src = this.props.whiteplayer ? WhiteBishop_img : BlackBishop_img;
    img.onload = () => this.props.connectDragPreview(img);
  }
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
          fontSize:'65px',
          }}>{this.props.whitesquare ? '♗' : '♝'}</div>
    );
  }
}

Bishop.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.BISHOP, bishopSource, collect)(Bishop);

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