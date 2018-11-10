<<<<<<< HEAD
//EXPORTED FUNCTIONS FOR DOING TICTACTOE LOGIC IN GAMEBOARD

export const changeCellNumberToSymbol = (grid, cellNumber, symbol) => {
    let row = getRowForCellNumber(cellNumber);
    let col = getColForCellNumber(cellNumber);
    grid[row][col] = symbol;
}

export const isThisAWinningMove = (grid, cellNumber, symbol) => {
    let row = getRowForCellNumber(cellNumber);
    let col = getColForCellNumber(cellNumber);
    return rowVictory(grid, row, symbol) || colVictory(grid, col, symbol) || diagonalVictory(grid, cellNumber, symbol);
}

export const boardIsFull = (grid) => {
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            if(grid[row][col] === '')
                return false;
        }
    }
    return true;
}

//HELPER FUNCTIONS ==========================================================


function rowVictory(grid, row, symbol) {
    return (grid[row][0] === symbol) && (grid[row][1] === symbol) && (grid[row][2] === symbol);
}

function colVictory(grid, col, symbol) {
    return (grid[0][col] === symbol) && (grid[1][col] === symbol) && (grid[2][col] === symbol);
}

function diagonalVictory(grid, cellNumber, symbol) {
    if(isADiagonalNumber(cellNumber)) {
        return topLeftToBottomRightVictory(grid, symbol) || topRightToBottomLeftVictory(grid, symbol);
    }
    return false;
}

function topLeftToBottomRightVictory(grid, symbol) {
    return (grid[0][0] === symbol) && (grid[1][1] === symbol) && (grid[2][2] === symbol);
}

function topRightToBottomLeftVictory(grid, symbol) {
    return (grid[0][2] === symbol) && (grid[1][1] === symbol) && (grid[2][0] === symbol);
}

function getRowForCellNumber(cellNumber) {
    return Math.floor(cellNumber / 3);
}

function getColForCellNumber(cellNumber) {
    return cellNumber % 3;
}

function isADiagonalNumber(cellNumber) {
    return cellNumber % 2 === 0;
}
=======
//EXPORTED FUNCTIONS FOR DOING TICTACTOE LOGIC IN GAMEBOARD

export const changeCellNumberToSymbol = (grid, cellNumber, symbol) => {
    let row = getRowForCellNumber(cellNumber);
    let col = getColForCellNumber(cellNumber);
    grid[row][col] = symbol;
}

export const isThisAWinningMove = (grid, cellNumber, symbol) => {
    let row = getRowForCellNumber(cellNumber);
    let col = getColForCellNumber(cellNumber);
    return rowVictory(grid, row, symbol) || colVictory(grid, col, symbol) || diagonalVictory(grid, cellNumber, symbol);
}

export const boardIsFull = (grid) => {
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            if(grid[row][col] === '')
                return false;
        }
    }
    return true;
}

//HELPER FUNCTIONS ==========================================================


function rowVictory(grid, row, symbol) {
    return (grid[row][0] === symbol) && (grid[row][1] === symbol) && (grid[row][2] === symbol);
}

function colVictory(grid, col, symbol) {
    return (grid[0][col] === symbol) && (grid[1][col] === symbol) && (grid[2][col] === symbol);
}

function diagonalVictory(grid, cellNumber, symbol) {
    if(isADiagonalNumber(cellNumber)) {
        return topLeftToBottomRightVictory(grid, symbol) || topRightToBottomLeftVictory(grid, symbol);
    }
    return false;
}

function topLeftToBottomRightVictory(grid, symbol) {
    return (grid[0][0] === symbol) && (grid[1][1] === symbol) && (grid[2][2] === symbol);
}

function topRightToBottomLeftVictory(grid, symbol) {
    return (grid[0][2] === symbol) && (grid[1][1] === symbol) && (grid[2][0] === symbol);
}

function getRowForCellNumber(cellNumber) {
    return Math.floor(cellNumber / 3);
}

function getColForCellNumber(cellNumber) {
    return cellNumber % 3;
}

function isADiagonalNumber(cellNumber) {
    return cellNumber % 2 === 0;
}
>>>>>>> 9b1cb1aec4a5aa2a38385d838e51e4f3e85d8b47
