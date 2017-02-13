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
import BoardSquare from './BoardSquare'



class Board extends Component {
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i}
           style={{ width: '80px', height: '80px' }}
           onClick={() => this.handleSquareClick(x, y)}>
      <BoardSquare x={x}
                   y={y}>
        {this.renderPiece(x, y)}
      </BoardSquare>
      </div>
    );
  }

renderPiece(x, y) {
    const black = (x + y) % 2 === 1;
    const white = !black;

    //***********  WHITE  ***************/
    const [wrookOneX, wrookOneY] = this.props.WhiteRookOnePosition;
    const [wrookTwoX, wrookTwoY] = this.props.WhiteRookTwoPosition;

    const [wknightOneX, wknightOneY] = this.props.WhiteKnightOnePosition; 
    const [wknightTwoX, wknightTwoY] = this.props.WhiteKnightTwoPosition;

    const [wbishopOneX, wbishopOneY] = this.props.WhiteBishopOnePosition;
    const [wbishopTwoX, wbishopTwoY] = this.props.WhiteBishopTwoPosition;

    const [wkingX, wkingY] = this.props.WhiteKingPosition;
    const [wqueenX, wqueenY] = this.props.WhiteQueenPosition;

    const [wpawnOneX, wpawnOneY] = this.props.WhitePawnOnePosition;
    const [wpawnTwoX, wpawnTwoY] = this.props.WhitePawnTwoPosition;
    const [wpawnThreeX, wpawnThreeY] = this.props.WhitePawnThreePosition;
    const [wpawnFourX, wpawnFourY] = this.props.WhitePawnFourPosition;
    const [wpawnFiveX, wpawnFiveY] = this.props.WhitePawnFivePosition;
    const [wpawnSixX, wpawnSixY] = this.props.WhitePawnSixPosition;
    const [wpawnSevenX, wpawnSevenY] = this.props.WhitePawnSevenPosition;
    const [wpawnEightX, wpawnEightY] = this.props.WhitePawnEightPosition;

    //***********  BLACK  ***************/
    const [brookOneX, brookOneY] = this.props.BlackRookOnePosition;
    const [brookTwoX, brookTwoY] = this.props.BlackRookTwoPosition;

    const [bknightOneX, bknightOneY] = this.props.BlackKnightOnePosition; 
    const [bknightTwoX, bknightTwoY] = this.props.BlackKnightTwoPosition;

    const [bbishopOneX, bbishopOneY] = this.props.BlackBishopOnePosition;
    const [bbishopTwoX, bbishopTwoY] = this.props.BlackBishopTwoPosition;

    const [bkingX, bkingY] = this.props.BlackKingPosition;
    const [bqueenX, bqueenY] = this.props.BlackQueenPosition;

    const [bpawnOneX, bpawnOneY] = this.props.BlackPawnOnePosition;
    const [bpawnTwoX, bpawnTwoY] = this.props.BlackPawnTwoPosition;
    const [bpawnThreeX, bpawnThreeY] = this.props.BlackPawnThreePosition;
    const [bpawnFourX, bpawnFourY] = this.props.BlackPawnFourPosition;
    const [bpawnFiveX, bpawnFiveY] = this.props.BlackPawnFivePosition;
    const [bpawnSixX, bpawnSixY] = this.props.BlackPawnSixPosition;
    const [bpawnSevenX, bpawnSevenY] = this.props.BlackPawnSevenPosition;
    const [bpawnEightX, bpawnEightY] = this.props.BlackPawnEightPosition;


    let piece = null;
                                              //The unicode black piece looks bad on white square
   	if(x === wrookOneX && y === wrookOneY)            piece = <Rook whitesquare={white} whiteplayer={true}/>;
    else if(x === wrookTwoX && y === wrookTwoY)       piece = <Rook whitesquare={white} whiteplayer={true}/>;
    else if(x === wknightOneX && y === wknightOneY)   piece = <Knight whitesquare={white} whiteplayer={true}/>;
    else if(x === wknightTwoX && y === wknightTwoY)   piece = <Knight whitesquare={white} whiteplayer={true}/>;
    else if(x === wbishopOneX && y === wbishopOneY)   piece = <Bishop whitesquare={white} whiteplayer={true}/>;
    else if(x === wbishopTwoX && y === wbishopTwoY)   piece = <Bishop whitesquare={white} whiteplayer={true}/>;
    else if(x === wkingX && y === wkingY)             piece = <King whitesquare={white} whiteplayer={true}/>;
    else if(x === wqueenX && y === wqueenY)           piece = <Queen whitesquare={white} whiteplayer={true}/>;
    else if(x === wpawnOneX && y === wpawnOneY)       piece = <Pawn whitesquare={white} whiteplayer={true}/>;
    else if(x === wpawnTwoX && y === wpawnTwoY)       piece = <Pawn whitesquare={white} whiteplayer={true}/>;
    else if(x === wpawnThreeX && y === wpawnThreeY)   piece = <Pawn whitesquare={white} whiteplayer={true}/>;
    else if(x === wpawnFourX && y === wpawnFourY)     piece = <Pawn whitesquare={white} whiteplayer={true}/>;
    else if(x === wpawnFiveX && y === wpawnFiveY)     piece = <Pawn whitesquare={white} whiteplayer={true}/>;
    else if(x === wpawnSixX && y === wpawnSixY)       piece = <Pawn whitesquare={white} whiteplayer={true}/>;
    else if(x === wpawnSevenX && y === wpawnSevenY)   piece = <Pawn whitesquare={white} whiteplayer={true}/>;
    else if(x === wpawnEightX && y === wpawnEightY)   piece = <Pawn whitesquare={white} whiteplayer={true}/>;

    else if(x === brookOneX && y === brookOneY)       piece = <Rook whitesquare={black} whiteplayer={false}/>;
    else if(x === brookTwoX && y === brookTwoY)       piece = <Rook whitesquare={black} whiteplayer={false}/>;
    else if(x === bknightOneX && y === bknightOneY)   piece = <Knight whitesquare={black} whiteplayer={false}/>;
    else if(x === bknightTwoX && y === bknightTwoY)   piece = <Knight whitesquare={black} whiteplayer={false}/>;
    else if(x === bbishopOneX && y === bbishopOneY)   piece = <Bishop whitesquare={black} whiteplayer={false}/>;
    else if(x === bbishopTwoX && y === bbishopTwoY)   piece = <Bishop whitesquare={black} whiteplayer={false}/>;
    else if(x === bkingX && y === bkingY)             piece = <King whitesquare={black} whiteplayer={false}/>;
    else if(x === bqueenX && y === bqueenY)           piece = <Queen whitesquare={black} whiteplayer={false}/>;
    else if(x === bpawnOneX && y === bpawnOneY)       piece = <Pawn whitesquare={black} whiteplayer={false}/>;
    else if(x === bpawnTwoX && y === bpawnTwoY)       piece = <Pawn whitesquare={black} whiteplayer={false}/>;
    else if(x === bpawnThreeX && y === bpawnThreeY)   piece = <Pawn whitesquare={black} whiteplayer={false}/>;
    else if(x === bpawnFourX && y === bpawnFourY)     piece = <Pawn whitesquare={black} whiteplayer={false}/>;
    else if(x === bpawnFiveX && y === bpawnFiveY)     piece = <Pawn whitesquare={black} whiteplayer={false}/>;
    else if(x === bpawnSixX && y === bpawnSixY)       piece = <Pawn whitesquare={black} whiteplayer={false}/>;
    else if(x === bpawnSevenX && y === bpawnSevenY)   piece = <Pawn whitesquare={black} whiteplayer={false}/>;
    else if(x === bpawnEightX && y === bpawnEightY)   piece = <Pawn whitesquare={black} whiteplayer={false}/>;

    else                                            piece = null;
    return piece;
}

handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
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

export default DragDropContext(HTML5Backend)(Board);

Board.propTypes = {
  WhiteKnightOnePosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};