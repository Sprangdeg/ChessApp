import React, { Component } from 'react';
import { TYPES, COLORS, getColor, getType } from './Constants';

export default class History extends Component {
    renderHistoryPost(i, move){
        const bColor = i % 2 === 0 ? 'lightgrey' : 'white';
       return (<li  key={i}
                    style={{backgroundColor: bColor}}> 
                    <div style={{fontSize:'20px', fontFamily: 'monospace'}}> 
                        {renderPiece(move.piece)} {indexToChessNotation(move.moveFrom)} {indexToChessNotation(move.moveTo)} 
                    </div> 
                </li>);
    }

    render(){    
    const histories = [];
    var branch = this.props.branch;

    for (let i = 1; i < branch.actions.length; i++) {
         histories.push(this.renderHistoryPost(i, branch.actions[i]));
    }

        return (<div>
                    <h2>History</h2>
                    <ol style={{width: '8em'}}>
                        {histories}
                    </ol>
                </div>);
    };
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