import {TYPES, COLORS} from '../Constants'

export default function reducer(state = {
    board: [TYPES.ROOK*COLORS.WHITE, 
                TYPES.KNIGHT*COLORS.WHITE,
                TYPES.BISHOP*COLORS.WHITE,
                TYPES.KING*COLORS.WHITE,
                TYPES.QUEEN*COLORS.WHITE,
                TYPES.BISHOP*COLORS.WHITE, 
                TYPES.KNIGHT*COLORS.WHITE, 
                TYPES.ROOK*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,
                TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,
                TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,
                TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.ROOK*COLORS.BLACK, 
                TYPES.KNIGHT*COLORS.BLACK,
                TYPES.BISHOP*COLORS.BLACK,
                TYPES.KING*COLORS.BLACK,
                TYPES.QUEEN*COLORS.BLACK,
                TYPES.BISHOP*COLORS.BLACK, 
                TYPES.KNIGHT*COLORS.BLACK, 
                TYPES.ROOK*COLORS.BLACK,
              ]
}, action) {
    switch (action.type) {
        case "MOVE": {
            return {
                ...state,
                board: state.board.map((item, index) => {
                    if (index !== action.moveFrom && index !== action.moveTo) {
                        // This isn't the item we care about - keep it as-is
                        return item;
                    }
                    else if (index === action.moveTo) {
                        return action.piece;
                    }
                    else if (index === action.moveFrom) {
                        return TYPES.EMPTY;
                    }
                    else {
                        return item;
                    }
                })
            }
        }
        default:
            return state;
    }
}