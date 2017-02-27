export function moveAction(piece, color, moveFrom, moveTo){
    return {
        type: "MOVE",
        moveTo: transformToIndex(moveTo),
        moveFrom: transformToIndex(moveFrom),
        piece: combineTypeColor(piece, color)
    }
}

export function enPassantAction(piece, color, moveFrom, moveTo, emptySquare){
    return {
        type: "ENPASSANT",
        moveTo: transformToIndex(moveTo),
        moveFrom: transformToIndex(moveFrom),
        piece: combineTypeColor(piece, color),
        emptySquare: transformToIndex(emptySquare)
    }
}

function transformToIndex(coord){
    const [x, y] = coord;
    return x + y*8; 
}

function combineTypeColor(piece, color){
    return (piece * color);
}