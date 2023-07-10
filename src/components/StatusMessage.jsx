/* eslint-disable react/prop-types */
const StatusMessage = ({ isXnext, winner, squares }) => {
  const nomovesleft = squares.every(value => {
    if (value !== null) return true;
  });

  const nextplayer = isXnext ? 'X' : 'O';

  const rendermsg = () => {
    if (winner) {
      return (
        <div>
          <h2>Winner is {winner}</h2>
        </div>
      );
    }
    if (!winner && nomovesleft) {
      return (
        <div>
          <h2>Game Draw</h2>
        </div>
      );
    }
    if (!winner && !nomovesleft) {
      return (
        <div>
          <h2>Next Player is {nextplayer} </h2>
        </div>
      );
    }

    return null;
  };
  return <div>{rendermsg()}</div>;
};

export default StatusMessage;
