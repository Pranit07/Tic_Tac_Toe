import { useState } from 'react';
import './style.scss';
import { calculateWinner } from './winner.js';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isXnext, setisXnext] = useState(true);

  const winner = calculateWinner(squares);

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

  const clicknewgame = () => {
    window.location.reload(true);
  };

  return (
    <div className="app">
      <StatusMessage isXnext={isXnext} winner={winner} squares={squares} />
      <Board squares={squares} handlesquareclick={handlesquareclick} />

      <div>
        <button type="button" className="btn-reset" onClick={clicknewgame}>
          Start new game
        </button>
      </div>
    </div>
  );
}

export default App;
