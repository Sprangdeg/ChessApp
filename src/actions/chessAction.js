export function moveAction(piece, color, moveFrom, moveTo){
    return {
        type: "MOVE",
        moveTo: transformToIndex(moveTo),
        moveFrom: transformToIndex(moveFrom),
        piece: combineTypeColor(piece, color)
    }
}

function transformToIndex(coord){
    const [x, y] = coord;
    return x + y*8; 
}

function combineTypeColor(piece, color){
    return (piece * color);
}