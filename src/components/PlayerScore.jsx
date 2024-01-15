import { useState } from "react";
import { players } from "../utils/playerList";

export const PlayerScore = () => {
  const [scores, setScores] = useState(players);

  const increase = (index) => {
    const updatedScores = [...scores];
    updatedScores[index].playerScore += 1;
    setScores(updatedScores);
    updatedScores.sort((b, a) => a.playerScore - b.playerScore);
    setScores(updatedScores);
  };

  const decrease = (index) => {
    const updatedScores = [...scores];
    updatedScores[index].playerScore -= 1;
    setScores(updatedScores);
    updatedScores.sort((b, a) => a.playerScore - b.playerScore);
    setScores(updatedScores);
  };

  return (
    <div>
      {scores.map((player, index) => (
        <div className="card" key={index}>
          <h2>{player.playerName}</h2>
          <div className="score">
            <button onClick={() => decrease(index)}>-</button>
            <span>{player.playerScore}</span>
            <button onClick={() => increase(index)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PlayerScore;
