export function move(piece, toPosition){
    return {
        type: "MOVE",
        toPosition: toPosition,
        piece: piece
    }
}