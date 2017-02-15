export function move(piece, moveTo, moveFrom){
    return {
        type: "MOVE",
        moveTo: moveTo,
        moveFrom: moveFrom,
        piece: piece
    }
}