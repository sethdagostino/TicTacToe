import React from 'react';
import './App.css';
import GameBoard from './containers/GameBoard';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(far, faTimes);


class App extends React.Component {
  render() {
    return (
      <div className="centered-container">
        <GameBoard />
      </div>
    );
  }
}

export default App;
