/* eslint-disable react/prop-types */
const StatusMessage = ({ isXnext, winner, squares }) => {
  const nomovesleft = squares.every(value => {
    if (value !== null) return true;
  });

  const nextplayer = isXnext ? 'X' : 'O';

  const rendermsg = () => {
    if (winner) {
      return <div>Winner is {winner}</div>;
    }
    if (!winner && nomovesleft) {
      return <div>Game Draw</div>;
    }
    if (!winner && !nomovesleft) {
      return <div>Next Player is {nextplayer} </div>;
    }

    return null;
  };
  return <div>{rendermsg()}</div>;
};

export default StatusMessage;
