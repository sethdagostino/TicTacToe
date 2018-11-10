//Presentational component to represent a Circle, O, in TicTacToe

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { symbolStyle } from '../styles/Styles.js'

const Circle = () => (
    <FontAwesomeIcon style={{...symbolStyle, color: "skyBlue"}} icon={['far', 'circle']}/>
);

export default Circle;
