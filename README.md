# TicTacToe
A fun little single page application for playing TicTacToe

### Running my App
My app is hosted on [Github Pages](https://sethdagostino.github.io/tictactoe/).

You can also clone the repo of the master branch, and run it locally using 
<code>
    npm start
</code>

### My Features
I wrote this app in React.js trying to keep React.js programming patterns in mind while designing my components. I also tried out my new learned CSS media query skills to make the app responsive and compatible with most devices.

Currently, my game allows you to play TicTacToe on one window, alternating turns between X's and O's until either one wins or the game board is full. There is a reset button that can be hit at any time to restart the game. Once there is a winner, the board does not allow you to continue playing until you reset.

### Future Plans
- Adding lifecycle methods to prevent unneccessary rendering of Cells upon every change of the grid state
- Improve maintainability by refactoring code to be more readable and reusable, especially in GameBoard.js
- Recognition over recall - Instead of having to look at the banner for whose turn it is, it would be cool if hovering over the cells had a faint X or O depending on who's turn it was

Implementing these things will be good practice for me, but I hope what I have so far is satisfactory. Thank you whoever is reviewing this, have a wonderful day!
