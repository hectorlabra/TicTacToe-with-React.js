import React, { useState } from 'react';
import '../../styles/index.css';
import '../../styles/bootstrap.min.css';

function GameBoard({ player1, player2 }) {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [squares, setSquares] = useState(Array(9).fill(null));
  
    const handleClick = (i) => {
      if (!squares[i] && !calculateWinner(squares)) {
        const newSquares = squares.slice();
        newSquares[i] = currentPlayer;
        setSquares(newSquares);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    };
  
    const calculateWinner = (squares) => {
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6]             // Diagonales
      ];
  
      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
  
      return null;
    };
  
    const winner = calculateWinner(squares);
    let status;
  
    if (winner) {
      if (winner === 'X') {
        status = `${player1} WINS!`;
      } else if (winner === 'O') {
        status = `${player2} WINS!`;
      }
    } else {
      status = `It's ${currentPlayer === 'X' ? player1 : player2} Turn!`;
    }
  
    return (
      <div className="container text-center mt-5">
        <h1 className="text-white">TIC TAC TOE in React.js</h1>
        <h3 className="mt-3 text-white">{status}</h3>
        <div className="row mt-4">
          <div className="col-md-6 offset-md-3 d-flex justify-content-center">
            <div className="board">
              {squares.map((value, index) => (
                <div key={index} className="square" onClick={() => handleClick(index)}>
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default GameBoard;