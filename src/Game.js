import { TYPES } from "./Constants"
export function move(toX, toY) {

}

export function canMove(piece, moveFrom, moveTo) {
  const [fromX, fromY] = moveFrom;
  const [toX, toY] = moveTo;
  const dx = toX - fromX;
  const dy = toY - fromY;

  switch(piece){
    case TYPES.KNIGHT:{
        return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
               (Math.abs(dx) === 1 && Math.abs(dy) === 2);
    }
    default: return true;
  }
}



function getPosition(boardIndex){
    let Column = boardIndex % 8;
    let Row = Math.floor(boardIndex / 8);
    return [Column, Row]
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