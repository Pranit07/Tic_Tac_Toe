import { useState } from 'react';
import './style.scss';
import { calculateWinner } from './winner.js';
import Board from './components/Board';

function App() {
  const [squares, setsquares] = useState(Array(9).fill());
  const [isXnext, setisXnext] = useState(true);

  const winner = calculateWinner(squares);
  const playermsg = isXnext ? 'X' : 'O';
  const status = winner ? `Winner is ${winner}` : `Next player is ${playermsg}`;

  const handlesquareclick = clicked_position => {
    if (squares[clicked_position] || winner) {
      return;
    }

    setsquares(squares => {
      return squares.map((squarevalue, position) => {
        if (clicked_position == position) {
          return isXnext ? 'X' : 'O';
        }

        return squarevalue;
      });
    });

    setisXnext(currentisXnext => !currentisXnext);
  };

  return (
    <div className="app">
      <h2>{status}</h2>
      <Board squares={squares} handlesquareclick={handlesquareclick} />
    </div>
  );
}

export default App;
