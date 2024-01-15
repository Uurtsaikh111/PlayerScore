import { players } from "../utils/playerList";

export default function AddPlayer({ newName }) {
  return (
    <div className="resetBtn">
      <input id="nameInput" type="" />

      <button
        onClick={() => {
          newName(
            players.push({
              playerName: nameInput.value,
              playerScore: 0,
              index: players.length,
            })
          );

          nameInput.value = "";
        }}
      >
        Add player
      </button>
    </div>
  );
}
