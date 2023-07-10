/* eslint-disable react/prop-types */
import React from 'react';

const StatusMessage = ({ isXnext, winner, squares }) => {
  const nomovesleft = squares.every(value => {
    if (value !== null) return true;
  });

  const nextplayer = isXnext ? 'X' : 'O';

  const rendermsg = () => {
    if (winner) {
      return (
        <React.Fragment>
          Winner is{' '}
          <span className={winner == 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </React.Fragment>
      );
    }
    if (!winner && nomovesleft) {
      return <React.Fragment>Game Draw</React.Fragment>;
    }
    if (!winner && !nomovesleft) {
      return (
        <React.Fragment>
          Next Player is{' '}
          <span className={isXnext ? 'text-green' : 'text-orange'}>
            {nextplayer}
          </span>
        </React.Fragment>
      );
    }

    return null;
  };
  return <div className="status-message">{rendermsg()}</div>;
};

export default StatusMessage;
