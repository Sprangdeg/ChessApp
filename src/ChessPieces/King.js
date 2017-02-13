import React, { Component, PropTypes } from 'react';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';
import WhiteKing_img from './WhiteKing.png';

const kingSource = {
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

class King extends Component {
    componentDidMount() {
    const img = new Image();
    img.src = WhiteKing_img;
    img.onload = () => this.props.connectDragPreview(img);
  }
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
          fontSize:'65px',
          }}>{this.props.white ? '♔' : '♚'}</div>
    );
  }
}

King.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KING, kingSource, collect)(King);