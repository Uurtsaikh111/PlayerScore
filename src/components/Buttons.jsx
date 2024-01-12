export default function Buttons({ num, changeNum }) {
  return (
    <div className="score">
      <button
        className="buttonsOperators"
        onClick={() => {
          changeNum(num - 1);
        }}
      >
        -
      </button>
      <p>{num}</p>
      <div>
        <button
          className="buttonsOperators"
          onClick={() => {
            changeNum(num + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
