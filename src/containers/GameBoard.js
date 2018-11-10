/* Container component that includes a Banner announcing things about the game,
 * a table of Cells for representing the X's and O's, and a reset button. This is
 * the only stateful component. I use logic from TicTacToeGridLogic to do functions
 * related to a tic tac toe grid that weren't limited to the display, that way that
 * code could be reused. 
*/

import React from 'react';
import Banner from '../components/Banner';
import Cell from './Cell';
import { changeCellNumberToSymbol, isThisAWinningMove, boardIsFull } from '../TicTacToeGridLogic'

class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newGame: true,
            gameOver: false,
            whichTurn: "X",
            grid: [['', '', ''], ['', '', ''], ['', '', '']],
            gameWon: false
        }
        this.handleClickBlankCell = this.handleClickBlankCell.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.makeMove = this.makeMove.bind(this);
        this.switchTurns = this.switchTurns.bind(this);
    }

    makeMove(symbol, cellNumber) {
        console.log(`Setting cell ${cellNumber} to a ${symbol}`);
        let revisedGrid = this.state.grid;
        changeCellNumberToSymbol(revisedGrid, cellNumber, symbol);
        this.setState({grid: revisedGrid})
    }

    switchTurns() {
        if(this.state.whichTurn === "X") {
            this.setState({whichTurn: "O"});
        }
        else {
            this.setState({whichTurn: "X"});
        }
    }

    handleClickBlankCell(cellNumber) {
        //Blank cells should only react if the game is not over
        if(!this.state.gameOver) {
            //Game has started, set newGame to false
            if(this.state.newGame) {
                console.log("New game started!");
                this.setState({newGame: false});
            }
            //Update the grid for this move and check if its a winning move
            this.makeMove(this.state.whichTurn, cellNumber);
            if(isThisAWinningMove(this.state.grid, cellNumber, this.state.whichTurn)) {
                var winningSymbol = this.state.whichTurn;
                console.log(winningSymbol + " just won!");
                this.setState({gameOver: true, gameWon: true});
                return;
            }
            //If the board is full, finish the game. Otherwise, switch turns
            if(boardIsFull(this.state.grid)) {
                console.log("Board is full. Game over");
                this.setState({gameOver: true});
            }
            else {
                this.switchTurns();
            }
        }
    }

    handleResetClick() {
        console.log("Resetting!");
        this.setState({
            newGame: true,
            gameOver: false,
            whichTurn: "X",
            grid: [['', '', ''], ['', '', ''], ['', '', '']],
            gameWon: false
        });
    }

    render() {
        return (
        <div>
            <div className="centered-container">
            <Banner newGame={this.state.newGame} gameOver={this.state.gameOver} gameWon={this.state.gameWon} whichTurn={this.state.whichTurn}/>

            <table>
                <tbody>
                    <tr>
                        <td><Cell symbol={this.state.grid[0][0]} onClick={() => this.handleClickBlankCell(0)}/></td>
                        <td><Cell symbol={this.state.grid[0][1]} onClick={() => this.handleClickBlankCell(1)}/></td>
                        <td><Cell symbol={this.state.grid[0][2]} onClick={() => this.handleClickBlankCell(2)}/></td>
                    </tr>
                    <tr>
                        <td><Cell symbol={this.state.grid[1][0]} onClick={() => this.handleClickBlankCell(3)}/></td>
                        <td><Cell symbol={this.state.grid[1][1]} onClick={() => this.handleClickBlankCell(4)}/></td>
                        <td><Cell symbol={this.state.grid[1][2]} onClick={() => this.handleClickBlankCell(5)}/></td>
                    </tr>
                    <tr>
                        <td><Cell symbol={this.state.grid[2][0]} onClick={() => this.handleClickBlankCell(6)}/></td>
                        <td><Cell symbol={this.state.grid[2][1]} onClick={() => this.handleClickBlankCell(7)}/></td>
                        <td><Cell symbol={this.state.grid[2][2]} onClick={() => this.handleClickBlankCell(8)}/></td>
                    </tr>
                </tbody>
            </table>
            <button id="resetButton" onClick={this.handleResetClick}>RESET</button>
            </div>
        </div>
        );
    }
}

export default GameBoard;
