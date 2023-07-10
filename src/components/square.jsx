/* eslint-disable react/prop-types */
const Square = ({ value, onclick }) => {
  return (
    <button
      type="button"
      className={`square ${value == 'X' ? 'text-green' : 'text-orange'}`}
      onClick={onclick}
    >
      {value}
    </button>
  );
};

export default Square;
