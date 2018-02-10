// JavaScript source code
class Game {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }

    playMove(rowIndex, columnIndex) {
        this._board.flipTile(rowIndex, columnIndex);
        if (this._board.bombBoard[rowIndex][columnIndex] === 'B') {
            console.log('Game Over!!');
            this._board.print();
        } else if (!this._board.hasSafeTiles) {
            console.log('You Win!!');
        } else {
            console.log('Current Board:');
            this._board.print();
        }
    }
};


class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = (numberOfRows * numberOfColumns);
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    get playerBoard() {
        return this._playerBoard;
    }

    get bombBoard() {
      return this._bombBoard;
    }

    flipTile (rowIndex, columnIndex) {
        if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
            console.log('This tile has already been flipped!');
            return;
        } else if (this._bombBoard[rowIndex][columnIndex] == 'B') {
            this._playerBoard[rowIndex][columnIndex] = 'B';
        } else {
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        };

        this._numberOfTiles--;
    }

    getNumberOfNeighborBombs (rowIndex, columnIndex) {

        let neighbourOffsets = [];
        neighbourOffsets = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1]
        ];

        let numberOfRows = this._bombBoard.length;
        let numberOfColumns = this._bombBoard[0].length;
        let numberOfBombs = 0;

        neighbourOffsets.forEach(offset => {
            let neighborRowIndex;
            let neighborColumnIndex;

            neighborRowIndex = rowIndex + offset[1];
            neighborColumnIndex = columnIndex + offset[0];

            if (neighborRowIndex >= 0 &&
                neighborRowIndex < numberOfRows &&
                neighborColumnIndex >= 0 &&
                neighborColumnIndex < numberOfColumns) {

                if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                    numberOfBombs = numberOfBombs + 1;
                }
            };
        });
        return numberOfBombs;
    }

    hasSafeTiles() {
        return (this._numberOfTiles !== this._numberOfBombs);
    }

    print() {
        console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
    }

    static generatePlayerBoard (numberOfRows, numberOfColumns) {
        const board = [];

        for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
            const row = [];
            for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
                row.push(' ');
            }
            board.push(row);
        }
        return board;
    }


    static generateBombBoard (numberOfRows, numberOfColumns, numberOfBombs) {
        const board = [];

        for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
            const row = [];
            for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
                row.push(null);
            }
            board.push(row);
        }

        let numberOfBombsPlaced = 0;

        while (numberOfBombsPlaced < numberOfBombs) {
            // This code has the potential to place bombs on top of bombs, this will be fixed with control flow.
            const randomRowIndex = Math.floor(Math.random() * numberOfRows);
            const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
            if (board[randomRowIndex][randomColumnIndex] !== 'B') {
                board[randomRowIndex][randomColumnIndex] = 'B';
                numberOfBombsPlaced++;
            }
        }

        return board;
    };
};

// Play a few moves to complete the game
const g = new Game(3, 3, 3);

g.playMove(0, 0);
g.playMove(0, 1);
g.playMove(0, 2);
g.playMove(1, 0);
g.playMove(1, 1);
g.playMove(1, 2);
g.playMove(2, 0);
g.playMove(2, 1);
g.playMove(2, 2);
