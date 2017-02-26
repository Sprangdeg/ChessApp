import React, { Component } from 'react';
import { TYPES, COLORS, getColor, getType } from './Constants';
import {goToSpecificAction, getBranchStateAsTree} from 'redux-branchable'

export default class History extends Component {
    renderHistoryPost(counter, branchIndex, actionIndex, move){
        const bColor = counter % 2 === 0 ? 'lightgrey' : 'white';
       return (<li  key={counter}
                    style={{backgroundColor: bColor, cursor:'pointer'}}
                    onClick={() => handleHistoryClick(branchIndex, actionIndex, this.props.moveHistory)}> 
                    <div style={{fontSize:'20px', fontFamily: 'monospace'}}> 
                        {renderPiece(move.piece)} {indexToChessNotation(move.moveFrom)} {indexToChessNotation(move.moveTo)} 
                    </div> 
                </li>);
    }

    render(){    
    const histories = [];
    var tree = getBranchStateAsTree(this.props.store.branches);
    var historyArray = getCurrentHistoryAsArray(tree, historyArray);
    
    for(let i = 0; i<historyArray.length; i++){
        histories.push(this.renderHistoryPost(i+1, historyArray[i].branch, historyArray[i].depth, historyArray[i].action));
    }

      return (<div>
                  <h2>History</h2>
                  <ol style={{width: '8em'}}>
                      {histories}
                   </ol>
              </div>);
    };
}

function handleHistoryClick(branchIndex, actionIndex, dispatch) {
    //I can do things if you click the history
    dispatch(goToSpecificAction(branchIndex, actionIndex));
}

function getCurrentHistoryAsArray(node, histories = []){
    if(node === undefined || node === null){
        return histories;
    }
    //The most recent moves are always the right most nodes in the tree, which is the last child
    let nextNode = node.children[node.children.length-1];
    if(isRoot(node)){   //Don't see the point of showing the inital state in the history
        return getCurrentHistoryAsArray(nextNode, histories);
    }
    else{
        histories.push({action: node.action, branch: node.branch, depth: node.depth})
        return getCurrentHistoryAsArray(nextNode, histories);
    }
}

function isRoot(node){
    return node.action.type === "@@redux-branchable/INIT";
}

function renderPiece(piece){
        const type = getType(piece);
        const color = getColor(piece);
        const whiteplayer = color === COLORS.WHITE;

        switch (type) {
            case TYPES.PAWN: {
                return whiteplayer ? '♙' : '♟';
            }
            case TYPES.BISHOP: {
                return whiteplayer ? '♗' : '♝';
            }
            case TYPES.KNIGHT: {
                return whiteplayer ? '♘' : '♞';
            }
            case TYPES.QUEEN: {
                return whiteplayer ? '♕' : '♛';
            }
            case TYPES.KING: {
                return whiteplayer ? '♔' : '♚';
            }
            case TYPES.ROOK: {
                return whiteplayer ? '♖' : '♜';
            }
            default: return null;
        }        
}

function indexToChessNotation(index){
    const row = Math.floor(index/8)
    const col = index % 8;
    let letter;
        switch (col) {
            case 0: {
                letter = 'a';
                break;
            }
            case 1: {
                letter = 'b';
                break;
            }
            case 2: {
                letter = 'c';
                break;
            }
            case 3: {
                letter = 'd';
                break;
            }
            case 4: {
                letter = 'e';
                break;
            }
            case 5: {
                letter = 'f';
                break;
            }
            case 6: {
                letter = 'g';
                break;
            }
            case 7: {
                letter = 'h';
                break;
            }
            default: letter = null;
        }  


    return [letter, row+1];
}