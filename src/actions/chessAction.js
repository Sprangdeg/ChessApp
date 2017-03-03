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

export function promotion(piece, color, moveFrom, moveTo){
    return {
        type: "PROMOTION",
        moveTo: transformToIndex(moveTo),
        moveFrom: transformToIndex(moveFrom),
        piece: combineTypeColor(piece, color)        
    }
}

export function castling(king, rook, color, moveKingFrom, moveKingTo, moveRookFrom, moveRookTo){
    return {
        type: "CASTLING",
        moveKingTo: transformToIndex(moveKingTo),
        moveKingFrom: transformToIndex(moveKingFrom),
        moveRookFrom: transformToIndex(moveRookFrom),
        moveRookTo: transformToIndex(moveRookTo),
        king: combineTypeColor(king, color),
        rook: combineTypeColor(rook, color)        
    }
}

function transformToIndex(coord){
    const [x, y] = coord;
    return x + y*8; 
}

function combineTypeColor(piece, color){
    return (piece * color);
}