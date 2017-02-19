import { TYPES, COLORS } from "./Constants"

export function canMove(piece, color, moveFrom, moveTo, board) {
  const [fromX, fromY] = moveFrom;
  const [toX, toY] = moveTo;
  const dx = toX - fromX;
  const dy = toY - fromY;

  if(dx === 0 && dy === 0)
    return false;

  var otherPiece = board[getIndex(moveTo)];
  if(otherPiece != TYPES.EMPTY && getColor(otherPiece) === color)
    return false;

  if(piece != TYPES.KNIGHT && hasBlockingPiece(moveFrom, moveTo, board))
    return false;

  switch(piece){
    case TYPES.KNIGHT:{
        return knightMovement(dx, dy);
    }
    case TYPES.ROOK:{
        return rookMovement(dx, dy, board);
    }
    case TYPES.KING:{
        return kingMovement(dx, dy);
    }
    case TYPES.PAWN:{
        return pawnMovement(dx, dy, fromY, color);
    }
    case TYPES.QUEEN:{
        return rookMovement(dx, dy) || bishopMovement(dx, dy);
    }
    case TYPES.BISHOP:{
        return bishopMovement(dx, dy);
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

function pawnMovement(dx, dy, fromY, color){
    if(color === COLORS.WHITE){
        var canGo = fromY === 1 ? Math.abs(dx) === 0 && Math.abs(dy) <= 2 && dy > 0 : Math.abs(dx) === 0 && Math.abs(dy) <= 1 && dy > 0;
    }
    else{
        var canGo = fromY === 6 ? Math.abs(dx) === 0 && Math.abs(dy) <= 2 && dy < 0 : Math.abs(dx) === 0 && Math.abs(dy) <= 1 && dy < 0;
    }   
    return canGo;    
}

function getIndex(coord){
    const [x, y] = coord;
    return x + y*8; 
}

function getPosition(boardIndex){
    let Column = boardIndex % 8;
    let Row = Math.floor(boardIndex / 8);
    return [Column, Row]
}

function getColor(piece){
    return piece % COLORS.WHITE === 0 ? COLORS.WHITE : COLORS.BLACK;
}

function getType(piece){
    return piece % COLORS.WHITE === 0 ? piece/COLORS.WHITE : piece/COLORS.BLACK;
}

 function hasBlockingPiece(moveFrom, moveTo, board){
    const [fromX, fromY] = moveFrom;
    const [toX, toY] = moveTo;
    const dx = toX - fromX;
    const dy = toY - fromY;

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