import "./styles/global.css";
import Icon from "./components/Icon";
import ResetBtn from "./components/ResetBtn";
import PlayerScore from "./components/PlayerScore";
import AddPlayer from "./components/AddPlayer";
import { useState } from "react";
export default function App() {
  const [Player, newPlayer] = useState();
  return (
    <div className="container">
      <div className="header">
        <h1>Play Score</h1>
        <Icon />
      </div>
      <p>Hidden in the middle of text</p>
      <PlayerScore />
      <div className="buttons">
        <AddPlayer newName={newPlayer} />
        <ResetBtn />
      </div>
    </div>
  );
}
