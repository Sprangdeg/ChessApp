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
  observer(WhiteBishopOnePosition);
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
  observer(BlackPawnEightPosition);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}
