//Presentational component to represent a Times, X, in TicTacToe

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { symbolStyle } from '../styles/Styles.js'

const Times = () => (
    //<div style={{position: "relative"}} className="centered-container">
    <FontAwesomeIcon style={{...symbolStyle, color: "#E34444"}} icon="times"/>
    //</div>
);

export default Times;
