import { TYPES, COLORS, getColor, getType, getIndex, getCoordinats } from "./Constants"

export function canMove(piece, color, moveFrom, moveTo, board, moveHistory) {
  const [fromX, fromY] = moveFrom;
  const [toX, toY] = moveTo;
  const dx = toX - fromX;
  const dy = toY - fromY;

  //Used for checking blocking pieces.
  //You don't want to start on the first square since it would mean it's blocking itself
  let x0 = fromX;
  let y0 = fromY;
  if(x0 !== toX)
    x0 = (toX - x0) > 0 ? x0 + 1 : x0 - 1;
  if(y0 !== toY)
    y0 = (toY - y0) > 0 ? y0 + 1 : y0 - 1;
  
  
  if(dx === 0 && dy === 0)
    return false;

  var otherPiece = board[getIndex(moveTo)];
  if(otherPiece !== TYPES.EMPTY && getColor(otherPiece) === color)
    return false;

  //if(piece != TYPES.KNIGHT && hasBlockingPiece(fromX, fromY, toX, toY, board))
  //  return false;

  switch(piece){
    case TYPES.KNIGHT:{
        return knightMovement(dx, dy);
    }
    case TYPES.ROOK:{
        return rookMovement(dx, dy, board) && !hasBlockingPiece(x0, y0, toX, toY, board);
    }
    case TYPES.KING:{
        return kingMovement(dx, dy) && !hasBlockingPiece(x0, y0, toX, toY, board);
    }
    case TYPES.PAWN:{
        return (pawnMovement(dx, dy, fromY, moveTo, color, board) && !hasBlockingPiece(x0, y0, toX, toY, board)) || enPassant(color, dx, dy, moveFrom, board, moveHistory);
    }
    case TYPES.QUEEN:{
        return (rookMovement(dx, dy) || bishopMovement(dx, dy)) && !hasBlockingPiece(x0, y0, toX, toY, board);
    }
    case TYPES.BISHOP:{
        return bishopMovement(dx, dy) && !hasBlockingPiece(x0, y0, toX, toY, board);
    }
    default: return false;
  }
}

function knightMovement(dx, dy){
    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
           (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

function rookMovement(dx, dy, board, moveFrom, moveTo){
    return (Math.abs(dx) > 0 && Math.abs(dy) === 0) ||
           (Math.abs(dx) === 0 && Math.abs(dy) > 0);
}

function bishopMovement(dx, dy){
    return Math.abs(dx) === Math.abs(dy);
}

function kingMovement(dx, dy){
    return Math.abs(dx) <= 1 && Math.abs(dy) <= 1;
}

function pawnMovement(dx, dy, fromY, moveTo, color, board){
        var canGo = fromY === 1 || fromY === 6 ? Math.abs(dx) === 0 && Math.abs(dy) <= 2 && movingForward(color, dy) : Math.abs(dx) === 0 && Math.abs(dy) <= 1 && movingForward(color, dy);
        canGo = (canGo && emptySquare(moveTo, board) ) || canPawnCapture(dx, dy, moveTo, color, board);  
    return canGo;    
}

function emptySquare(square, board){
    return board[getIndex(square)] === TYPES.EMPTY
}

function canPawnCapture(dx, dy, moveTo, color, board){
    return ((dx === 1 || dx === -1) 
            && (dy === 1|| dy === -1)
            && (board[getIndex(moveTo)] !== TYPES.EMPTY && getColor(board[getIndex(moveTo)]) !== color)) 
            && movingForward(color, dy);
}

function enPassant(color, dx, dy, moveFrom, board, moveHistory){
    if((dx === 1 || dx === -1) && (dy === 1 || dy === -1) && movingForward(color, dy)){
        let enemyColor = color === COLORS.WHITE ? COLORS.BLACK : COLORS.WHITE;
        if(dx === -1 && enemyPawnLeft(enemyColor, moveFrom, board)){
            const [x, y] = moveFrom;
            if(pawnMovedTwoStepsLastTurn(moveHistory, [x-1, y])){
                return true;
            }
        }
        if(dx === 1 && enemyPawnRight(enemyColor, moveFrom, board)){
            const [x, y] = moveFrom;
            if(pawnMovedTwoStepsLastTurn(moveHistory, [x+1, y])){
                return true;
            }
        }
    }
    return false;
}

function enemyPawnLeft(enemyColor, moveFrom, board){
    let [x, y] = moveFrom;
    let squareLeftCoord = x > 0 ? [x-1, y] : null;
    if(squareLeftCoord !== null){
        let squareLeft = board[getIndex(squareLeftCoord)]
        if(squareLeft !== TYPES.EMPTY && enemyColor === getColor(squareLeft) && TYPES.PAWN === getType(squareLeft)){
            return true;
        }
    }
    return false;
}

function pawnMovedTwoStepsLastTurn(moveHistory, pawnPos){
    let lastMove = moveHistory[moveHistory.length-1];
    let piece = lastMove.action.piece;
    let from = lastMove.action.moveFrom;
    let to = lastMove.action.moveTo;

    const y0 = getCoordinats(from)[1];
    const y1 = getCoordinats(to)[1];
    const dy = y1 - y0; 

    const pawnIndex = getIndex(pawnPos);

    if(getType(piece) === TYPES.PAWN && Math.abs(dy) === 2 && to === pawnIndex)
        return true;
    else
        return false;
}

function enemyPawnRight(enemyColor, moveFrom, board){
    let [x, y] = moveFrom;
    let squareRightCoord = x < 7 ? [x+1, y] : null;
    if(squareRightCoord !== null){
        let squareRight = board[getIndex(squareRightCoord)]
        if(squareRight !== TYPES.EMPTY && enemyColor === getColor(squareRight) && TYPES.PAWN === getType(squareRight)){
            return true;
        }
    }
    return false;
}

function movingForward(color, dy){
    return color === COLORS.WHITE ? dy > 0 : dy < 0; 
}

/*function getPosition(boardIndex){
    let Column = boardIndex % 8;
    let Row = Math.floor(boardIndex / 8);
    return [Column, Row]
}*/

function hasBlockingPiece(x0, y0, x1, y1, board){
    if(x0 === x1 && y0 === y1){
        return false;
    }
    else if(board[getIndex([x0, y0])] !== TYPES.EMPTY){
        return true;
    }
    else{
        if(x0 !== x1)
            x0 = (x1 - x0) > 0 ? x0 + 1 : x0 - 1;
        if(y0 !== y1)
            y0 = (y1 - y0) > 0 ? y0 + 1 : y0 - 1;
        return hasBlockingPiece(x0, y0, x1, y1, board);
    }

    //Hämta alla arrayindex mellan moveFrom och moveTo

}

//
/*  GAME LAYOUT

1 a1 b1
2 a2 b2
3
4
5
6
7
8
  a  b  c  d  e  f  g  h

vilket blir

0   0  1  2  3  4  5  6  7
1   8  9 10 11 12 13 14 15
2  16 17 18 19 20 21 22 23
3  24 25 26 27 28 29 30 31
4  32 33 34 35 36 37 38 39
5  40 41 42 43 44 45 46 47
6  48 49 50 51 52 53 54 55
7  56 57 58 59 60 61 62 63
    
    0  1  2  3  4  5  6  7

Men för att underlätta om en pjäs går utanför brädan lägger vi till lite rader.
Anledningen att det finns två rader är för att hästen kan hoppa två steg

0   1  2  3  4  5  6  7  8    9
10  11 12 13 14 15 16 17 18  19
    -----------------------
20 |21 22 21 24 25 26 27 28| 29 
30 |31 32 33 34 35 36 37 38| 39
40 |41 42 43 44 45 46 47 48| 49
50 |51 52 53 54 55 56 57 58| 59
60 |61 62 63 64 65 66 67 68| 69
70 |71 72 73 74 75 76 77 78| 79
80 |81 82 83 84 85 86 87 88| 89 
90 |91 92 93 94 95 96 97 98| 99  
   ------------------------
100 101                  108 109
110 111                      119 


*/