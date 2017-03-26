import { canMove, makeMove, PlayersTurn } from './Game';
import { connect } from "react-redux";
import { getBranchStateAsTree, goToSpecificAction } from 'redux-branchable';
import { getCurrentHistoryAsArray } from './Constants';
import { moveAction, enPassantAction, promotion, castling } from "./actions/chessAction"


export function primeFishMove(color, board, history, moveCallbacks){
  //  if(canMove()){
  //      makeMove();
 //   }
}