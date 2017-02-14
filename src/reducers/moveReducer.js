export default function reducer(state={
    WhiteRookOne:[0, 0], 
    WhiteKnightOne:[1, 0],
    WhiteBishopOne:[2, 0], 
    WhiteKing:[3, 0], 
    WhiteQueen:[4, 0],
    WhiteBishopTwo:[5, 0],
    WhiteKnightTwo:[6, 0],
    WhiteRookTwo:[7, 0],                  
}, action){
    switch(action.type){
        case "MOVE":{
            return {...state, [action.piece]: action.toPosition}
        }
        default:
            return state;
    }

}