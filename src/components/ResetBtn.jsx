export default function ResetBtn() {
  return (
    <div className="resetBtn">
      <button onClick={() => {}}>Reset</button>
      <button
        onClick={() => {
          return (
            <div>
              <input type="text" />
            </div>
          );
        }}
      >
        Add player
      </button>
    </div>
  );
}
