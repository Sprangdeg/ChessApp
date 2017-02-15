import React, { Component, PropTypes } from 'react';
import { STRINGTYPES } from '../Constants';
import { DragSource } from 'react-dnd';
import WhiteKing_img from './WhiteKing.png';
import BlackKing_img from './BlackKing.png';

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
    img.src = this.props.whiteplayer ? WhiteKing_img : BlackKing_img;
    img.onload = () => this.props.connectDragPreview(img);
  }
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
          fontSize:'65px',
          }}>{this.props.whiteplayer ? '♔' : '♚'}</div>
    );
  }
}

King.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(STRINGTYPES.KING, kingSource, collect)(King);