//Presentational component to display announcements of the game, like whose
//turn it is, who won, when it is game over, etc.

import React from 'react';
import { bannerStyle } from '../styles/Styles'

class Banner extends React.Component {
    render() {
        if(this.props.newGame) {
            return (
                <div className="centered-container"  id="banner">
                    <h1>Tic-Tac-Toe</h1>
                    <h2>New Game! Let's start with {this.props.whichTurn}'s turn!</h2>
                </div>
            )
        }
        //If the game is won, display the winner
        if(this.props.gameWon) {
            return (
                <div className="centered-container"  id="banner">
                    <h1>Tic-Tac-Toe</h1>
                    <h2>Congratulations! {this.props.whichTurn}'s Won!</h2>
                    <h3>Hit RESET button to play again!</h3>
                </div>
            );
        }
        //This is the case the game is over by cat's game and they still hit a button
        else if(this.props.gameOver) {
            return (
                <div className="centered-container"  id="banner">
                    <h1>Tic-Tac-Toe</h1>
                    <h3>GAME OVER! Hit RESET button to play again!</h3>
                </div>
            );
        }
        else {
            return (
                <div className="centered-container"  id="banner">
                    <h1>Tic-Tac-Toe</h1>
                    <h2>Now it is {this.props.whichTurn}'s turn!</h2>
                </div>
            )
        }
    }
}

export default Banner;
