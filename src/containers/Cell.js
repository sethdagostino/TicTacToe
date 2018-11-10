//Container component to hold a O, X, or blank of one cell during TicTacToe
import React from 'react';
import Circle from '../components/Circle';
import Times from '../components/Times';
import { blankCell } from '../styles/Styles';

class Cell extends React.Component {

    render() {
        if(this.props.symbol === 'X') {
            return <Times />
        }
        else if(this.props.symbol === 'O') {
            return <Circle />
        }
        else {
            return <div style={blankCell} onClick={this.props.onClick}></div>
        }
    }
}

export default Cell;
