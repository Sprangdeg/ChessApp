import React, { Component, PropTypes } from 'react';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';

const kingSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class King extends Component {
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
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KING, kingSource, collect)(King);