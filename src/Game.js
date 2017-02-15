let WhiteRookOnePosition=[0, 0]; 
let WhiteKnightOnePosition=[1, 0];
let WhiteBishopOnePosition=[2, 0]; 
let WhiteKingPosition=[3, 0]; 
let WhiteQueenPosition=[4, 0];
let WhiteBishopTwoPosition=[5, 0];
let WhiteKnightTwoPosition=[6, 0];
let WhiteRookTwoPosition=[7, 0];                
let WhitePawnOnePosition=[0, 1]; 
let WhitePawnTwoPosition=[1, 1]; 
let WhitePawnThreePosition=[2, 1]; 
let WhitePawnFourPosition=[3, 1];
let WhitePawnFivePosition=[4, 1]; 
let WhitePawnSixPosition=[5, 1]; 
let WhitePawnSevenPosition=[6, 1]; 
let WhitePawnEightPosition=[7, 1]; 

let BlackRookOnePosition=[0, 7];
let BlackKnightOnePosition=[1, 7]; 
let BlackBishopOnePosition=[2, 7]; 
let BlackKingPosition=[3, 7]; 
let BlackQueenPosition=[4, 7];
let BlackBishopTwoPosition=[5, 7];
let BlackKnightTwoPosition=[6, 7]; 
let BlackRookTwoPosition=[7, 7];                
let BlackPawnOnePosition=[0, 6]; 
let BlackPawnTwoPosition=[1, 6]; 
let BlackPawnThreePosition=[2, 6]; 
let BlackPawnFourPosition=[3, 6]; 
let BlackPawnFivePosition=[4, 6]; 
let BlackPawnSixPosition=[5, 6]; 
let BlackPawnSevenPosition=[6, 6]; 
let BlackPawnEightPosition=[7, 6];

let observer = null;

export function moveKnight(toX, toY) {
  WhiteKnightOnePosition = [toX, toY];
  emitChange();
}

export function canMoveKnight(toX, toY) {
  const [x, y] = WhiteKnightOnePosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

function emitChange() {
  observer(WhiteKnightOnePosition);
 /* observer(WhiteBishopOnePosition);
  observer(WhiteKingPosition);
  observer(WhiteQueenPosition);
  observer(WhiteBishopTwoPosition);
  observer(WhiteKnightTwoPosition);
  observer(WhiteRookTwoPosition);
  observer(WhitePawnOnePosition);
  observer(WhitePawnTwoPosition);
  observer(WhitePawnThreePosition);
  observer(WhitePawnFourPosition);
  observer(WhitePawnFivePosition);
  observer(WhitePawnSixPosition);
  observer(WhitePawnSevenPosition);
  observer(WhitePawnEightPosition);

  observer(BlackRookOnePosition);
  observer(BlackKnightOnePosition);
  observer(BlackBishopOnePosition);
  observer(BlackKingPosition);
  observer(BlackQueenPosition);
  observer(BlackBishopTwoPosition);
  observer(BlackKnightTwoPosition);
  observer(BlackRookTwoPosition);
  observer(BlackPawnOnePosition);
  observer(BlackPawnTwoPosition);
  observer(BlackPawnThreePosition);
  observer(BlackPawnFourPosition);
  observer(BlackPawnFivePosition);
  observer(BlackPawnSixPosition);
  observer(BlackPawnSevenPosition);
  observer(BlackPawnEightPosition);*/
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}



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

1 0  1  2  3  4  5  6  7
2 8  9 10 11 12 13 14 15
3 
4
5
6
7
8
  a  b  c  d  e  f  g  h

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