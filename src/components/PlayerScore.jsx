import { useState } from "react";

const players = [
  {
    id: 1,
    playerName: "John Cena",
    playerScore: 0,
  },
  {
    id: 2,
    playerName: "John John",
    playerScore: 0,
  },
  {
    id: 3,
    playerName: "John Kena",
    playerScore: 0,
  },
];

export const PlayerScore = () => {
  const [scores, setScores] = useState(players);

  const increase = (index) => {
    const updatedScores = [...scores];
    updatedScores[index].playerScore += 1;
    setScores(updatedScores);
  };

  const decrease = (index) => {
    const updatedScores = [...scores];
    updatedScores[index].playerScore -= 1;
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
