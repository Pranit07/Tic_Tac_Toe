import { useState } from 'react';
import Square from './square';

const Board = () => {
  const [squares, setsquares] = useState(Array(9).fill());
  const [isXnext, setisXnext] = useState(true);

  const handlesquareclick = clicked_position => {
    if (squares[clicked_position]) {
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

  const rendersquare = position => {
    return (
      <Square
        value={squares[position]}
        onclick={() => handlesquareclick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>
      <div className="board-row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>
      <div className="board-row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
    </div>
  );
};

export default Board;
